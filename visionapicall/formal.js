const vision = require('@google-cloud/vision');
const labelDectection = async () => {
  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  const gcsUri = 'https://firebasestorage.googleapis.com/v0/b/ultra-might-264612.appspot.com/o/pic2?alt=media&token=11cf33e7-1d56-47cf-a083-db58a3bddfba';

  const [result] = await client.objectLocalization(gcsUri);
  const objects = result.localizedObjectAnnotations;
  console.log(objects)
  objects.forEach(object => {
    console.log(`Name: ${object.name}`);
    console.log(`Confidence: ${object.score}`);
    const veritices = object.boundingPoly.normalizedVertices;
    veritices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
});
}
labelDectection();