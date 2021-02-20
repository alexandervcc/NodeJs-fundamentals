const chalk=require('chalk')
const http=require('http');

const url="http://api.weatherstack.com/current?access_key=a2605b47b2a6d4d621a5216978917de2&query=37.8267,-122.4233&units=f"

const request=http.request(url,(res)=>{
    let = data=""

    //Register a handler
    res.on("data",(chunk)=>{
        //ONce per each chunk
        data=data+chunk.toString()

    });

    res.on("end",()=>{
        console.log(JSON.parse(data))
    });

    res.on("error",(err)=>{
        console.log("error: ",err)
    })


})

request.end()