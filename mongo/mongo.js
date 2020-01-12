const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0-uxw2k.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("test");

  const db = client.db("test");

  // This adds a value to the db
  db.collection('names').insertOne({
  	name: "vincent wong",
  	qty: 100,
    license_plate: "123ABC"
	}).then(function(result) {
	  // process result
	})
	
	// This reads a value from the db
	var cursor = db.collection('names').find({});
	function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
	}

	function errorFunc(error) {
		console.log(error);
	}

	cursor.forEach(iterateFunc, errorFunc);
  client.close();
});
