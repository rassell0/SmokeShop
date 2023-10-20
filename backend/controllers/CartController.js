const account = require("../mongoose/accountSchema")


exports.addToCart = (req,res) =>{

    const {id,name,flavor,uri,price,quantity,prodId} = req.body




account.findById(id).then(resp =>{
    resp.cart.push({name,flavor,uri,price,quantity,prodId}) 
   return resp.save().then(result =>{
    console.log(result)
  res.json({name,flavor,uri,price,quantity,prodId})
}) 

}).catch(err =>{
    console.log(err)
})


} 

exports.getCart = (req,res) =>{
    const {id} = req.body

account.findById(id).then(response =>{ 
   // console.log(response)
   return res.json(response.cart)
})

}