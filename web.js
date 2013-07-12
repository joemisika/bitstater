var express = require('express');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//var fs = require('fs');
//var buffer = new buffer ();
//  response.send(buffer.toString('utc 8', fs.readFileSync("index.html")))});
//});

app.get('/', function(request, response) {
    var fs = require('fs');
    var content = fs.ReadFile('index.html', 'utf-8');
    response.send(content);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
