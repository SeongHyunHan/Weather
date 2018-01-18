const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?sddress=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }else{
            callback('Unable to find that address.');
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
