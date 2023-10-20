const express = require("express")
const orderControlleer = require("../controllers/OrderController")
const router = express.Router()

router.use("/orders", orderControlleer.myOrders)

module.exports = router