const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controller/userController")
// const BookController= require("../controllers/bookController")
// const commonMiddle=require("../middleware/middle")
const UserController= require("../controller/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
const timeMid=function(req,res,next){
    let time=true
    if(time==true){
        console.log("middleware is work")
    }else{
        res.send("time error")
    }
       next()
    

}

router.get('/createUser',timeMid,UserController.timeStamp)
router.get('/basicAPi',timeMid,UserController.timeStamp)



module.exports = router;