const fs = require('fs');
const path = require('path');

const keysAndTokensPath = path.join(__dirname, '../../../Private/keysAndTokens.json');

/**
 * For getting ALL the private keys and tokens
 */
const getKeysAndTokens = () => {
    try {
        // next method, for this operation, is ok too
        // const dataBuffer = fs.readFileSync('../Private/keysAndTokens.json');
        const dataBuffer = fs.readFileSync(keysAndTokensPath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log('ERROR READING FILE!!!');
        console.log(e);
        process.exit();
    }
}

module.exports = {
    getKeysAndTokens
}