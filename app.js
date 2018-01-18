const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=444%20Kerr%20Street%20Ontario',
    json: true
}, (error, response, body) => {
    console.log(body);
});