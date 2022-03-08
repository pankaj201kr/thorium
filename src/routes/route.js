const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController=require("../controllers/orderController")
const HeaderMiddleware = require('../middleware/Middle')

router.post("/create",HeaderMiddleware.headerValidation, UserController.createUser)

router.post("/createProduct", productController.createProduct  )

router.post("/createOrder", HeaderMiddleware.headerValidation,orderController.createOrder)

module.exports = router;