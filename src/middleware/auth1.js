const userModel=require("../models/userModel")
const userController=require("../controllers/userController")
const jwt = require("jsonwebtoken");

const verifyToken = async function(req, res, next) {
  const token =req.body.token || req.query.token || req.headers["x-auth-token"];
  if (!token) {
    return res.send({status:"error",msg:"A token is required for authentication"});
  }
  
   next();
};

module.exports.verifyToken=verifyToken