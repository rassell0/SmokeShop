const express = require("express")
const productController = require("../controllers/ProductController")
const Router = express.Router()

Router.post("/product",productController.addProduct)
Router.get("/getProducts", productController.getAllProducts)
Router.get("/delete",productController.delete)
module.exports = Router 

