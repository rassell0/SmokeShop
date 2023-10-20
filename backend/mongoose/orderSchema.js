const mongoose = require("mongoose")

const Schema = mongoose.Schema

const order = new Schema({
   
    user_id:{type:Schema.Types.ObjectId,ref:"Accounts"},
    order_date:Date,
    total_amount:{
        type:Number,
        required:true
    },
    order_items:[{
    
product_id:{type:Schema.Types.ObjectId,ref:"product"},
quantity:Number,
unit_price:Number,
uri:String
    }]
})

module.exports = mongoose.model("orders",order)