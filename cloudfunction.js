/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb+srv://admin:admin@cluster0-uxw2k.mongodb.net/test?retryWrites=true&w=majority';

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, client) {
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
        res.send(vals);
        console.log(vals);
        }

        function errorFunc(error) {
            console.log(error);
            res.status(404).send(error)
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
};

