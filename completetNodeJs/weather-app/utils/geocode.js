const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaWRhbnJlaWNoZXIiLCJhIjoiY2thcXlwY2E2MDR4ajJ3bnFnMTd0cXo4bSJ9.J0tRiEbM313jZFG8aHz7HA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to locations services', undefined)
        } else if(body.features.lenght == 0){
            callback('Unable to find location pls try again', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocode