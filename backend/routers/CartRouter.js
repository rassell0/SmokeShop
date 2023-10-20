const express = require("express")
const cartController = require("../controllers/CartController")
const router = express.Router()

router.post("/addToCart",cartController.addToCart)

router.post("/getCart", cartController.getCart)
module.exports = router