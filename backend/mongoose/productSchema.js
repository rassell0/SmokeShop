const mongoose = require("mongoose")

const Schema =  mongoose.Schema

const product = new Schema({
    name:String,
    brand:String,
    flavors:Array,
    warning:Boolean,
    price:Number,
    details:Array
})

module.exports = mongoose.model("product",product)