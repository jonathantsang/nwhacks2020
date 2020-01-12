const vision = require('@google-cloud/vision');
const main = async () =>{
    try {
          // Creates a client
          const client = new vision.ImageAnnotatorClient();
          const uri = `gs://vision_api_test_330/test1.jpeg`;
          const request = {
              image: {content: uri},
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
        console.log(err)
    }
}
main()
