const request = require('request')


const forcast = (lat, lon, callback) => {
   
    const url = 'https://api.weatherbit.io/v2.0/current?&lat='+ lat +'&lon='+ lon +'&units=M&key=9251396e68304cdbb58eda9b2435231d'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forcast services', undefined)
        } else if(body.error){
            callback(body.error, undefined)
        }else{
            callback(undefined, 
                    body.data[0].weather.description + '. it is currently ' + 
                    body.data[0].temp + ' degries out and ' + body.data[0].precip + '% chance of rain' )
        }
    })
}

module.exports = forcast