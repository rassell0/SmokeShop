
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const account = new Schema({


    firstName:{
        type:String,
        
    },
    lastName:{ 
        type:String,
    
    },
    email:{ 
        type:String,
     
    },
    password:{
        type:String,
       
    },
    cart:Array,
    wishList:[{type:Schema.Types.ObjectId,ref:"product"}],
    guest:Boolean,
    orders:[{type:Schema.Types.ObjectId,ref:"orders"}],
    cid:String,
    stars:Number
})

module.exports = mongoose.model("Accounts", account)