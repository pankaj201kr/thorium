let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getdistrictId=async function(req,res){
    let district=req.query.district_id
    let date=req.query.date
    let options={
        method:"get",
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
        // headers:{}
    }
    let result=await  axios(options)
    console.log(result)
    let data=result.data
    res.status(200).send({msg:data,status:true})

}
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
// module.exports.getByPin = getByPin
// module.exports.getOtp = getOtp
module.exports.getdistrictId=getdistrictId