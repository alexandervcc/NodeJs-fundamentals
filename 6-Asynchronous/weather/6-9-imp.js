const geocode = require('./6-9-callbackAbs')

geocode('Quitosssssss', (error, data) => {
console.log('Error:\n', error)
console.log('Data:\n', data.sol )
})