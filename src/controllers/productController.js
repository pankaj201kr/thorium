const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}
const getProduct=async function(req,res){
    let userall=await productModel.find()
    res.send({msg:allusers})
}
module.exports.createProduct= createProduct
module.exports.getProduct=getProduct

