let obj=require('./logger')
const express=require("express");
const router=express.Router()

router.get('./test-me',function(req,res){
    obj.printPrblm('call welcome')
    console.log(obj.url)
    const req="   welcome TO FunctionUP   "
    res.send(req.trim(),req.toUpperCase(),req.toLowerCase())
});
module.exports=router;