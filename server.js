var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var path = require('path');
var Bing = require('node-bing-api')
            ({ accKey: process.env.BING_KEY });
var imageUrl = process.env.MONGOLAB_IMAGE_SEARCH 
				||'mongodb://localhost:27017/imagesearch';

app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
});
// Get image by query route
app.get('/api/imagesearch/:query', function(req, res) {
	var query = req.params.query;
	var offset = req.query.offset || 0;
	var results = [];
	// Call Bing Api and set up call
	Bing.images(query, {top: 10, skip: parseInt(offset)}
	    ,function(error, response, body){
	  		if (error) throw error;

	  		//push first 10 query an array
			for (var i = 0; i < 10; i++) {
				results.push({
					url: body.d.results[i].MediaUrl,
					snippet: body.d.results[i].Title,
					thumbnail: body.d.results[i].Thumbnail.MediaUrl,
					context: body.d.results[i].SourceUrl
				});
			}
			// Also save them in mongodb
			mongo.connect(imageUrl, function(err, db) {
				if (err) throw err;

				var images = db.collection('images');

				images.insert({
					term: query,
					when: new Date().toISOString()
				});
				// show the result
				res.json(results);
			});		
	});
});
// Get latest image queries
app.get('/api/latest/imagesearch', function(req, res) {
	// connect mongodb to get latest
	mongo.connect(imageUrl, function(err, db) {
		if (err) throw err;

		var images = db.collection('images');

		images.find({}, {_id: 0})
				.limit(10)
				.sort({ when: -1})
		.toArray(function(err, list) {
			if (err) throw err;
			// show the result
			res.json(list);
		});
	});
});
// Set port
var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});



