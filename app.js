const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        address: {
            describe: 'Address to getch weather for',
            demand: true,
            alias: 'a',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errMessage, weatherResult) => {
            if(errMessage){
                console.log(errMessage);
            }else{
                console.log(`It's currently ${weatherResult.temperature}. It feels like ${weather.Result.apprentTemperautre}`);
            }
        });
    }
});



