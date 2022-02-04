const request = require('postman-request')

const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam1oaWx0b24iLCJhIjoiY2t2c3hmbWNtOGdsaDJucTF0Zmp5NHRrOCJ9.l1iDXj1rWalWvZxd81z7wA&limit=1'

request({ url, json: true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0 ) {
        callback('Unable to find location. Try another search', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }
})
}

module.exports = geocode