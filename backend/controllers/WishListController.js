const productSchema = require("../mongoose/productSchema")
const accountSchema = require("../mongoose/accountSchema")
const { ObjectId } = require("mongodb")

exports.getWishList = (req,res) =>{
    const {email} = req.body
    
accountSchema.findOne({email}).populate("wishList").then(response =>{
    console.log(response)
   return res.json(response.wishList)
}) 
} 
 
exports.addToWishlist = (req,res) =>{ 
const {id,email} = req.body
accountSchema.findOne({email}).then(resp =>{
   
   resp.wishList.push(id)
   resp.save().then(response =>{
    console.log(response)
    return res.json(response)
   })
})
} 
exports.delete = (req,res) =>{ 
    const {id,email} = req.body

    accountSchema.findOne({email}).then(response =>{
        let temp = response.wishList
        
for(let i = 0; i < temp.length; i++){
if(temp[i].toString() === id){
    temp.splice(i,1)
   response.wishList = temp 
   response.save().then(resp=>{
      console.log(resp)
    //  return res.json(resp)
 
   })
}
}

 return res.json(response)
    }).catch(err =>{
        console.log(err)
    })
}

exports.findFavorites = (req,res) =>{
   const {email} = req.body
accountSchema.findOne({email}).then(result =>{
   console.log(result)
   
   res.json({ids:result.wishList})
})
  
}
