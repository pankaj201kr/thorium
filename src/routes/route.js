const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middle=require("../middleware/auth1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",middle.verifyToken, userController.createUser  )
router.post("/login",middle.verifyToken,userController.loginUser)
router.get("/users/:userId",middle.verifyToken, userController.getUserData)
router.delete("/userdel/:userId",userController.deleteApi)



module.exports = router;