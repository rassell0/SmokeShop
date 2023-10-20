const categorySchema = require("../mongoose/categorySchema");

exports.makeCat = (req,res) =>{

const {cat} = req.body

const category = new categorySchema({
    name:cat
})


category.save().then(res =>{
    console.log(res)
})

} 

exports.getCats = (req, res) =>{
    categorySchema.find().populate("products").then(resp=>{
       return res.json(resp)
    })
}