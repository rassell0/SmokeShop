
const productSchema = require("../mongoose/productSchema")
const categorySchema = require("../mongoose/categorySchema")
const { response } = require("express")


exports.addProduct = (req,res) =>{

const {name,price,details,warning,flavors,brand} = req.body


const product = new productSchema({name,price,details,warning,flavors,brand})

product.save().then(response =>{
    categorySchema.findById("6470d95063e272bbf705b9d1").then(cat =>{
        
        let temp = cat.products 
       
       temp.push(product._id)
      
        cat.products = temp

   
        cat.save().then(response =>{
           console.log(response)
          return  res.json(response)
        }) 
    })
    console.log(response)


//res.json(response)
}).catch(err=>{  
    console.log(err)
})
 
}
 
exports.delete = (req,res) =>{
    categorySchema.findById("6470d95063e272bbf705b9d1").then(cat =>{
        let temp = cat.products
        temp.pop()
        cat.products = temp
        
     cat.save().then(response =>{
           console.log(response)
        })
    })
}


exports.getAllProducts = (req,res) =>{ 
    productSchema.find().then(response =>{
     
      return res.json(response)
    }).catch(err =>{
        console.log(err)
        console.log("???")
    })
}


