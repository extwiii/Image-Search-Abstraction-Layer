var express = require('express');
var app = express();


app.get('/', function (req, res) {
		
});

var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});



