let obj=require('./logger')
const express=require("express");
const router=express.Router()

router.get('./test-me',function(req,res){
    obj.printPrblm('call welcome')
    console.log(obj.url)
    res.send('welcome to my application. I am Pankaj kumar and a part of FunctionUp Thorium cohort.')

});
module.exports=router;