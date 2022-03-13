// const { default: axios } = require("axios")
const axios=require("axios")

const memes=async function (req,res){
    memeId=req.query.template_id 
    text0=req.query.text0
    text1=req.query.text1

    let options={
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${memeId}
        &text0=${text0}&text1=${text1}&username=chewie12345 & password=meme@123`    
        }
        let result=await axios(options)
        console.log(result)
        let data=result.data
        res.status(200).send({msg:data,status:true})

    }
    module.exports.memes = memes
            
