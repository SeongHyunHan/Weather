const request = require('request');

const apiKey = '14a55753cf461095c54f71594d34f45b';

var getWeather = (latitude, longitude, callback) => {
    request({
        url:`https://api.forecast.io/forecast/${apiKey}/${latitude},${longitude}`,
        json: true
    }, (err, res, body) => {
        if(!err && res.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
           callback('Unable to Fetch Weather');
        }
    });
};

module.exports = {
    getWeather
}