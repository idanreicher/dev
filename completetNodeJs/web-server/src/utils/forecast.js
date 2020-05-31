const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?&lat='+ latitude +'&lon='+ longitude +'&units=M&key=9251396e68304cdbb58eda9b2435231d'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.data[0].description + ' It is currently ' + body.data[0].temp + ' degress out. There is a ' + body.data[0].precip + '% chance of rain.')
        }
    })
}

module.exports = forecast