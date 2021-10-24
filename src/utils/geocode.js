const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFpbmh1dG8iLCJhIjoiY2t1dXVhbjdlMDNkczJ1a2YxamdpbG9paSJ9.9Beyxrf7pGfJYa8vFtwTAA&limit=1'
    
    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to ' + error.hostname, undefined)
        } else if (response.body.features.length === 0) {
            callback('Location not found!', undefined)
        } else {
            const {features} = response.body
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

// module.exports = {
//     geocode: geocode
// }

module.exports = geocode
