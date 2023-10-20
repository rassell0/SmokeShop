const mongoose = require("mongoose")

const Schema = mongoose.Schema

const guestAccount = new Schema({
    firstName:String,
    lastName:String,
    cart:Array,
    orders:Array
})

module.exports = mongoose.model("guest",guestAccount)