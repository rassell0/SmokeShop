const express = require("express")
const checkoutController = require("../controllers/CheckoutController")

const router = express.Router()

router.post("/intent", checkoutController.intent)
router.post("/addOne", checkoutController.addOne)
router.post("/removeOne", checkoutController.removeOne)
router.post("/delete", checkoutController.delete)

router.post("/complete", checkoutController.completeOrder)

module.exports = router