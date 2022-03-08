const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user=await userModel.findOne({emailId:userName,password:password})
  console.log(user)
  if(!user) return res.send({status:false,msg:"credentials don't match"})
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
}
const deleteApi=async function(req,res){
  let userId=req.params.userId
  let deleteData=req.body
  let deleteUser=await userModel.findByIdAndDelete({_id:userId},deleteData)
  if(!deleteUser) return res.send({msg:"id is not valid"})
  else{
    return res.send({msg:"user id is delete"})
    
  }
  
}

// console.log(deleteUser)
module.exports.createUser = createUser;
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.deleteApi=deleteApi
