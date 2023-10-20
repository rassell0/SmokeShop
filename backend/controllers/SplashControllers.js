
const accountSchema = require("../mongoose/accountSchema")


exports.signUp =(req,res) =>{
    const {firstName,lastName,email,password} = req.body

    accountSchema.findOne({email}).then(result=>{ 
        if(result){
            return res.json({
                error:"Theres an account made with this email"
            }) 
        }
    })
    
const account = new accountSchema({ 
    firstName,lastName,email,password,guest:false
})
account.save().then(resp =>{

return res.json(resp)
    
}).catch(err =>{ 
    console.log(err)
})

}

exports.logIn = (req,res) =>{
    const {email,password} = req.body

accountSchema.findOne({email}).populate("wishList").then(result =>{
    
    if(!result){
        return res.json({
            "error":"Please enter a valid email"
        })

        
    }

    console.log(result)
 if(result.password !== password){
return res.json({
    "error":"Invalid Password"
})
   }

    return res.json({
        result
    })
})

}

exports.isLoggedIn = (req,res) =>{
const {id} = req.body


accountSchema.findById(id).populate("wishList").then(response =>{

   return res.json(response)
}).catch(err =>{
    console.log(err)
}) 




 
}   

exports.guestLogin = (req,res) =>{

    const guest = new accountSchema({
        guest:true
    }) 

    guest.save().then(response =>{ 
        return res.json(response)
    }).catch(err =>{
        console.log(err)  
    })
     
}

exports.getGuest = (req,res) =>{
  
 
   const {guestId} = req.body


 accountSchema.findById(guestId).then(response=>{
  
      return res.json(response)
    })
    
}