const pinataSDK = require('@pinata/sdk');
const readline = require("readline-sync");
require('dotenv').config();
const{PinataApiKey ,PinataSecretApiKey} = process.env;
const pinata = pinataSDK(PinataApiKey, PinataSecretApiKey);
pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});

function upload(){
var _state = readline.question("Enter state Name: ");
var _district = readline.question("Enter district Name: ");
var _plotNo = Number(readline.question("Enter Plot Number: "));
const body = {
    state: _state,
    district: _district,
    plotNo: _plotNo
};
const options = {
    pinataMetadata: {
        name: 'rajdeep',
        keyvalues: {
            customKey: _plotNo,            
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinJSONToIPFS(body, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
}
upload()