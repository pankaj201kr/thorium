let obj=require('./util')
const express=require("express");
const router=express.Router()

router.get('./test-me',function(req,res){
    obj.printPrblm('call welcome')
    console.log(obj.url)
   res.send(new Date(current.setDate(first)),
          'Thorium, W3D1, the topic for today is Nodejs module system')

});
module.exports=router;