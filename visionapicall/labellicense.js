// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
// var admin = require("firebase-admin");

var serviceAccount = require("./ultra-might-264612-firebase-adminsdk-ztba0-4b08710ee4.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "<BUCKET_NAME>.appspot.com"
// });

// var bucket = admin.storage().bucket();

// adjust confidence value 
var confidence = 0.6;

               
const gcsUri ='gs://ultra-might-264612.appspot.com/pic2';
// img url from gcp storage 
// parking lot: gs://vision_api_test_330/test2.jpg 
// car: 'gs://vision_api_test_330/test1.jpeg'
// var pic = 'gs://vision_api_test_330/test1.jpeg';
 
// const fileName = './test1.png';
// detect car 
// return True if its a car
const labelDectection = async () => {
    try {
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        const request = {
            image: {content: gcsUri},
          };          
        
        const [result] = await client.objectLocalization(gcsUri);
        const objects = result.localizedObjectAnnotations;
        var res;
        objects.forEach(object => {
            console.log(object);
            if (object.name=="Shoe"){
                res = {
                        "isCar": true, 
                        "confidence":object.score
                    }
            }
        //  const vertices = object.boundingPoly.normalizedVertices;
        //  vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
        });
        console.log(res)
        return res;
    } catch (err){
        console.log(err);
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
const licenseDectection = async () =>{
    // get label 
    const result = await labelDectection();
    const client = new vision.ImageAnnotatorClient();
    // if it is a car
    if (result==null){
        return {
            "left":true,
            "licence":null,
        };
    } else if (result.isCar && result.confidence>confidence){
        return client
            .textDetection(gcsUri)
            .then(response => {
                return {
                    "left":false,
                    "licence": response[0].fullTextAnnotation.text 
                } 
            })
            .catch(err => {
                return err;
            }); 
    } else {
        return {
            "left":true,
            "licence":null,
        }
    }
}

// const test = async() =>{
//     var t = await licenseDectection();
//     console.log(t);
// }
(function() {
    var c = 0;
    var timeout = setInterval(function() {
      console.log(c);
      c++;
      labelDectection().then(data=>{
        if (!data.left){
            const MongoClient = require('mongodb').MongoClient;
            const assert = require('assert'); 
            // Connection URL
            const url = 'mongodb+srv://admin:admin@cluster0-uxw2k.mongodb.net/test?retryWrites=true&w=majority'; 
            // Use connect method to connect to the Server
            MongoClient.connect(url, function(err, client) {
              assert.equal(null, err);
              console.log("test");
            
              const db = client.db("test");
            
             //  // This adds a value to the db
             //  db.collection('names').insertOne({
             //  	name: "Mickey Mouse",
             //  	qty: 100,
             //    license_plate: "123ABC"
                // })
                
                // This reads a value from the db
                var cursor = db.collection('names').find({});
                function iterateFunc(doc) {
                vals = JSON.stringify(doc, null, 4);
                console.log(vals);
                }
            
                function errorFunc(error) {
                    console.log(error);
                }
                cursor.forEach(iterateFunc, errorFunc); 
              // Update value in db
              var myquery = { name: /^M/ };
              var newvalues = { $inc: { qty: 3 } };
              db.collection('names').updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("value incremented");
              });
              client.close();
            });
        }   
      });
      if (c > 1000) {
        clearInterval(timeout);
      }
    }, 10000);
  })();