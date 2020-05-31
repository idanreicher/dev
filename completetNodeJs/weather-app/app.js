const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longtitude, location}) => {
        if (error) {
            return console.log(error)
        }
    
        forcast(latitude, longtitude, (error, forcastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forcastData)
        })
    })    
}



