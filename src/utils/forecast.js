const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=136a9ee057e49bb173c3356c5f78807f&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to ' + error.hostname, undefined)
        } else {
            if (body) {
                const {success, current, error} = body
                if (success === false) {
                    callback(error.info, undefined)
                } else {
                    const {weather_descriptions, temperature, feelslike, humidity} = current
                    // const weather_descriptions = response.body.current.weather_descriptions[0]
                    // const temperature = response.body.current.temperature
                    // const feelslike = response.body.current.feelslike
                    callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out. The humidity is ' + humidity + '%')
                }
            } else {
                callback('Unable to connect to Wheatherstack', undefined)
            }
        }    
    })

}

module.exports = forecast