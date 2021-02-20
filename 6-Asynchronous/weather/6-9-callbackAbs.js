const request = require('request')

const geocode = (address, callback) => {
    const url="http://api.weatherstack.com/current?access_key=a2605b47b2a6d4d621a5216978917de2&query="
    +address

    request({ url: url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)

        }  else {

            callback(undefined, {
                sol:res.body
            })

        }

    })

}

module.exports = geocode