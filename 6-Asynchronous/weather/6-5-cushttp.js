//instal http module 'request' and import
const http=require('request')
const key="a2605b47b2a6d4d621a5216978917de2"
const baseUrl='http://api.weatherstack.com/'
const url="http://api.weatherstack.com/current?access_key=a2605b47b2a6d4d621a5216978917de2&query=37.8267,-122.4233&units=f"

//With json option we dont need to parse it
http({url:url,json:true},(err,res)=>{
    //Parse the response body from JSPN to JS object
   // const data=JSON.parse(res.body)

    //PRint data
//    console.log(res.body.current)
    console.log("It is currently",res.body.current.temperature, " degrees out. And is ",
    res.body.current.precip, " change of rain")    
})