let axios = require('axios')


let weatherReport = async function (req, res) {
    try{
    let cities = req.query.cities
    let appid = req.query.appid
    // console.log(`queryparams :${cities} ${appid}`)
    let options = {
        method: "get",
        url: ` http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${appid}`
    }
    let result = await axios(options);
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: data, status: true })
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:"server not found"})
    }
}
// problem no.02

let sortedcities = async function (req, res) {
  try{
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","Patna"]
    let citiesObjArr = []
    for (let i = 0; i < cities.length; i++) {
        let obj = { city: cities[i] }
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e46717f19d52e22b2af0c61a00ff50bf`
        }
        let resp = await axios(options)
        console.log(resp.data.main.temp)
        obj.temp = resp.data.main.temp
        citiesObjArr.push(obj)
    }
    let sorted = citiesObjArr.sort(function (a, b) {
        return a.temp - b.temp
    })

    console.log(sorted)
    res.status(200).send({ status: true, data: sorted })
}catch(error){
    console.log(error.message)
    res.status(500).send({status:false,msg:"server not found"})
}
}
module.exports.weatherReport = weatherReport
module.exports.sortedcities = sortedcities