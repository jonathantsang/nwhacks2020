// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
// const fs = require('fs');

// adjust confidence value 
var confidence = 0.6;

// img url from gcp storage 
// parking lot: gs://vision_api_test_330/test2.jpg 
// car: 'gs://vision_api_test_330/test1.jpeg'
// var pic = 'gs://vision_api_test_330/test1.jpeg';
 
// const fileName = './test1.png';
// detect car 
// return True if its a car
const labelDectection = async (path) => {
    try {
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        const request = {
            image: {content: path},
          };          
    
        const [result] = await client.objectLocalization(request);
        const objects = result.localizedObjectAnnotations;
        var res;
        objects.forEach(object => {
            console.log(object);
            if (object.name=="Car"){
                res = {
                        "isCar": true, 
                        "confidence":object.score
                    }
            }
        //  const vertices = object.boundingPoly.normalizedVertices;
        //  vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
        });
        return res;
    } catch (err){
        return err;
    }
}

// var request = {
//     image: {
//       image: {content: fs.readFileSync(fileName)},
//       source: {imageUri: pic}
//     }
// };
// return false if not detecting a car or error
// return licence plate if confidence >0.6 and isCar == true 
export const licenseDectection = async (path) =>{
    // get label 
    const result = await labelDectection();
    const client = new vision.ImageAnnotatorClient();
    // if it is a car
    if (result==null){
        return false;
    } else if (result.isCar && result.confidence>confidence){
        return client
            .textDetection(path)
            .then(response => {
                return response[0].fullTextAnnotation.text  
            })
            .catch(err => {
                return err;
            }); 
    } else {
        return false;
    }
    // if (result.isCar && result.confidence>confidence){
    //     // return license plate 
    //     return client
    //                 .textDetection(request)
    //                 .then(response => {
    //                     return response[0].fullTextAnnotation.text  
    //                 })
    //                 .catch(err => {
    //                     return err;
    //                 }); 
    // } else {
    //     return false;
    // }
}

const test = async() =>{
    var t = await licenseDectection();
    console.log(t);
}
test();