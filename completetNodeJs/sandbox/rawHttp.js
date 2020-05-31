const https = require('https')

const url = 'https://api.weatherbit.io/v2.0/current?&lat=40&lon=-75&units=M&key=9251396e68304cdbb58eda9b2435231d'

const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chank) => {
        data = data + chank.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()