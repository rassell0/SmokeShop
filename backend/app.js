const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const router = require("./routers/SplashRouter")
const catRouter = require("./routers/CategoryRouter")
const productRouter = require("./routers/ProductRouter")
const cartRouter = require("./routers/CartRouter")
const checkoutRouter = require("./routers/CheckoutRouter")
const wishListRouter = require("./routers/WishListRouter")
const orderRouter = require("./routers/orderRouter")
const homeRouter = require("./routers/HomeRouter")

const app = express()

app.use(bodyParser.json())


app.use(router)  
app.use(catRouter)
app.use(productRouter)
app.use(cartRouter)
app.use(checkoutRouter) 
app.use(wishListRouter)
app.use(orderRouter)
app.use(homeRouter)
mongoose.connect("mongodb+srv://rassell0:Buddhaman4@cluster0.liytjfw.mongodb.net/Smoke").then(result =>{

    console.log("cool")
    app.listen(4000) 
}).catch(err =>{
    console.log(err)
    
})