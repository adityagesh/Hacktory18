const fs=require('fs');
const microsofComputerVision = require("microsoft-computer-vision");
data=fs.readFile('./shoes.jpg', function(err, data) {
    if (err)
        throw err;
 
    microsofComputerVision.analyzeImage({
      "Ocp-Apim-Subscription-Key": "7f7447787a8e48d7a762ba3694d92e88",
      "request-origin":"westcentralus",
      "content-type": "application/octet-stream",
      "body": data,
      "visual-features":"Tags, Faces"
    }).then((result) => {
        console.log(result);     

    }).catch((err)=>{
      throw err;
    })
});