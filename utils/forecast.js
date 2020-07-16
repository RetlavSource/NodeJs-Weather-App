const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5dddae4de66515aca9ff477058b743ec&query=${latitude},${longitude}&units=m`;

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