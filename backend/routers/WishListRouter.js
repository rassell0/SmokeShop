const controllers = require("../controllers/WishListController")


const express = require("express")

const router = express.Router()

router.post("/addToWishList", controllers.addToWishlist)
router.post("/deleteFromWishList", controllers.delete)  
router.post("/getWishList", controllers.getWishList)
router.post("/findFavorites", controllers.findFavorites)
router.post("/getWishList",controllers.getWishList) 

module.exports = router   