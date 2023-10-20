const express = require("express")
const categoryController = require("../controllers/CategoryController")
const Router = express.Router()

Router.use("/test", categoryController.makeCat)

Router.get("/getCats", categoryController.getCats)

module.exports = Router