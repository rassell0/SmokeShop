const express = require("express")


const router = express.Router()
const splashControllers = require("../controllers/SplashControllers")

router.post("/signUp",splashControllers.signUp)

router.post("/logIn",splashControllers.logIn)

router.post("/isLoggedIn", splashControllers.isLoggedIn)

router.get("/guestLogin", splashControllers.guestLogin)

router.post("/guestLogin", splashControllers.getGuest)
module.exports = router