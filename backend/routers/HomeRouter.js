const HomeControllers = require("../controllers/HomeController")
const express = require("express")

const Router = express.Router()



Router.get("/funky",HomeControllers.funky)
Router.get("/vapes",HomeControllers.vapes)
Router.get("/juice",HomeControllers.juice)
Router.get("/kit",HomeControllers.kit)
Router.get("/pro",HomeControllers.juice)
module.exports = Router