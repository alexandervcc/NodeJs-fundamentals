const request=require('request')

const key="a2605b47b2a6d4d621a5216978917de2"
const baseUrl='http://api.weatherstack.com/'
const url="http://api.weatherstack.com/current?access_key=a2605b47b2a6d4d621a5216978917de2&query=37.8267,-122.4233&units=f"


request({url:url,json:true},(err,res)=>{
    if(err){
        console.log("Somehitng went Wrong")
    }else{
    console.log(res.body)   
    }
})

const geourl="ss"


//IF its not connected to internet, it will fail
