const account = require("../mongoose/accountSchema")

exports.myOrders = (req,res) =>{
const {id} = req.body





account.findById(id).populate("orders").then(response =>{
  console.log(response)
   return res.json(response.orders)
})   
}   