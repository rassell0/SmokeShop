
const CategorySchema = require("../mongoose/categorySchema")


exports.funky =(req,res)=>{
    CategorySchema.findOne({name:"Vapes"}).populate("products").then(response=>{

     let temp = response.products
     
     let idk = temp.filter(list => list.brand === "Funky Republic")
  
        return res.json(idk)
    })
}

exports.vapes = (req,res) =>{
    CategorySchema.findOne({name:"Vapes"}).populate("products").then(response=>{
     
        return res.json(response.products)
    })
}
exports.juice = (req,res) =>{
    CategorySchema.findOne({name:"Vape Juice"}).populate("products").then(response=>{
     
        return res.json(response.products)
    })
}
exports.kit = (req,res) =>{
    CategorySchema.findOne({name:"Vape Kits"}).populate("products").then(response=>{
   
        return res.json(response.products)
    })
}