const request = require('postman-request');
const utils = require('./utils');

// Get ALL the keys and Tokens
const keysAndTokens = utils.getKeysAndTokens();

const geocode = (address, callback) => {
    const mapBoxToken = keysAndTokens.mapBoxToken;
    // encodeURIComponent(address) -> is safer. Translates everything into a string (? becomes %3F)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapBoxToken}&limit=1`;

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try again with different search terms!', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;