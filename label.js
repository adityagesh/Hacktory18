'use strict';

const request = require('request');
const fs= require('fs');


// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '7f7447787a8e48d7a762ba3694d92e88';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';

const imageUrl =
    'D:/Program Files/Pictures/Games2.png';

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};
fs.readFile('./phenious_bg_white.jpg', function(err, data) {
    if (err)
        throw err;  
            console.log(data);

        // request.post(options, (error, response, body) => {
        //     if (error) {
        //       console.log('Error: ', error);
        //       return;
        //     }
        //     let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        //     console.log('JSON Response\n');
        //     console.log(jsonResponse);
        //   });

})
const options = {
    uri: uriBase,
    qs: params,
    body:  imageUrl,
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

