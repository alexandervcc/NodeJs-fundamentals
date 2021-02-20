/*CALLBACK: core fo asynchronous
    The function we pass as an argument to a function

//Execute after som time
setTimeout(()=>{
    console.log("2 seconds")
},2000)


*/



const url="http://api.weatherstack.com/current?access_key=a2605b47b2a6d4d621a5216978917de2&query="



const getWeather=(sumd,callback)=>{
    setTimeout(()=>{
        console.log("Starting after 2s ")
        //CAlls the callback function
        callback(sumd)
    },2000)
}

//Using the callbacj from secod argument
getWeather({v1:2,v2:2},(data)=>{
    console.log(data.v1+data.v2)
})
