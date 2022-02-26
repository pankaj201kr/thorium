const express = require('express');
const router = express.Router();

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     let id = req.body.user
//     let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })


// Assigment 1 (date=23/02/2022)
let players=[] 
 router.post('/players',function(req,res){
     let player=req.body
     let playerName=player.name
     for(let i=0;i<player.length;i++){
         if(players[i].name=playerName){
             res.send('player already exits')
         }
     }
     players.push(player)
     console.log(player)
     res.send(player)
 })
//  assingment2
router.post('/players/:playerName/:bookingsId',function(req,res){
    let name=req.params.playerName
    let isPlayerPresent=false
    for(let i=0;players.length;i++){
        if(players[i].name=name){
            isPlayerPresent=true
        }
    }
    if(!isPlayerPresent){
        res.send("player is not present")
    }
    res.send("player is present")
    // let bookingId=req.params.bookingsIds
})



module.exports = router;