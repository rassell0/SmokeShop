const stripe = require("stripe")('sk_test_51MIBh1CstgMWqkBiG7epfMQBQ0qNu6VgYuT2oJTAduFmB8lWDzRQrhPFOGnwnFEV98t9xdV8UEVx1SlV5MwhP90X00nR9tb9qV');
const orderSchema = require("../mongoose/orderSchema")

const account = require("../mongoose/accountSchema")
exports.intent = async (req,res) => {

    const {amount,cid,id} = req.body
if(!cid){


const customer = await stripe.customers.create();
const ephemeralKey = await stripe.ephemeralKeys.create(
  {customer: customer.id},
  {apiVersion: '2022-11-15'}
);


const paymentIntent = await stripe.paymentIntents.create({
  amount,
  currency: 'usd',
  customer: customer.id,
  automatic_payment_methods: {
    enabled: true,
  }, 
}); 

account.findById(id).then(result =>{
  result.cid = cid
  result.save().then(riz=>{
   return res.json({
     paymentIntent: paymentIntent.client_secret,
     ephemeralKey: ephemeralKey.secret,
     customer: customer.id,
     publishableKey: "pk_test_51MIBh1CstgMWqkBiKR9WZjR80OmdKKODKJi6QM4L0ZzmViN3Ft7StlIpnqlRPlfFzPduBDa72UOliDRC6QdjcKgF00ZIgZXl9L"
   });
  })
 })


}else{
 
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: cid},
    {apiVersion: '2022-11-15'}
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    customer: cid, 
    automatic_payment_methods: {
      enabled: true,
    },
  }); 

    return res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: cid,
      publishableKey: "pk_test_51MIBh1CstgMWqkBiKR9WZjR80OmdKKODKJi6QM4L0ZzmViN3Ft7StlIpnqlRPlfFzPduBDa72UOliDRC6QdjcKgF00ZIgZXl9L"
    });
 
 
  
}


//console.log(cid)
    
    
}

exports.addOne = (req,res)=>{
  const {email,index} = req.body

  account.findOne({email}).then(response =>{
    let product = response.cart[index]
    product.quantity += 1
     
    response.cart[index] = product
    response.save().then(resp =>{
      console.log(resp)
      return res.json(resp.cart)
    }) 
    
  }).catch(err =>{
    console.log(err)
  })


}
   
exports.removeOne = async (req,res)=>{
  const {email,index} = req.body

  account.findOne({email}).then(response =>{

let product = response.cart[index]
product.quantity -= 1
 
response.cart[index] = product


   response.save().then(resp =>{ 
 
   return res.json(resp.cart) 
 }) 

  }).catch(err =>{
    console.log(err)
  })
  

}
   

exports.delete = (req,res) =>{

  const {email,index} = req.body

  account.findOne({email}).then(response =>{
  
   let cart = response.cart

cart.splice(index,1)
 
   
response.cart = cart
 
   response.save().then(response =>{
    
res.json(response.cart)
   })
    }) 

}

exports.completeOrder = (req,res) =>{

const {user_id,order,total_amount,order_date} = req.body


let copy = order

const  order_items = copy.map(order =>{
 const {name,price,quantity,prodId,flavor,uri} = order
 return {product_id:prodId,unit_price:price,quantity,name,uri}
})

const newOrder = new orderSchema({
  user_id,
  total_amount,
  order_date,
  order_items,
 
})
console.log(newOrder)
newOrder.save().then(response =>{
  account.findById(user_id).then(response =>{
response.orders.push(newOrder._id)
response.cart = []
response.save().then(response =>{
  return res.json(response)
}) 
})
})
 
}