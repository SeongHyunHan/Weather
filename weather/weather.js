const request = require('request');

const apiKey = '14a55753cf461095c54f71594d34f45b';

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/${apiKey} /${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
