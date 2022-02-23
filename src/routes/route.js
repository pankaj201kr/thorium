const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// problem no:1
router.get('/movies',function(req,res){
    res.send('["Fukrey","Delhi","Dabang","Rockstar","Suryawansh"]')
})
// problem no:2
router.get('/movies/:movieId',function(req,res){
    // console.log(req)
    mov=["Fukrey","Delhi","Dabang","Rockstar","Suryawansh"]
    let value=req.params.movieId;
    if(value>mov.length-1){
        res.send("doesn't exit")
    }else{
        res.send(mov[value])
    }
})
// problem no:3
router.get('/moviez',function(req,res){
    res.send([{id:1,name:'The Shining'},{id:2,name:'Icendies'},{id:3,name:'Rang the basanti'},{id:4,name:'finding DEmo'}])
})
// qustion no:4
router.get('/films/:filmId',function(req,res){
    let movi=([{id:1,name:'The Shining'},{id:2,name:'Icendies'},{id:3,name:'Rang the basanti'},{id:4,name:'finding DEmo'}])
    let value=req.params.filmId
    let found=false
    for(i=0;i<movi.length;i++){
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break;
        }
    }
    if (found==false){
        res.send('NO movie existwith this id')
    }
})

module.exports = router;
