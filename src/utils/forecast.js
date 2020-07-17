const request = require('postman-request');
const utils = require('./utils');

// Get ALL the keys and Tokens
const keysAndTokens = utils.getKeysAndTokens();

const forecast = (latitude, longitude, callback) => {
    const weatherStackKey = keysAndTokens.weatherStackKey;
    const url = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=${latitude},${longitude}&units=m`;

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback(`Unable to find location. ${body.error.info}`, undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}ºC out. It feels like ${body.current.feelslike}ºC out`);
        }
    })
}

module.exports = forecast;