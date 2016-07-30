// The main server file for the simple node (express) web server.

var express = require('express');
var app = express();

app.use('/projects', express.static('projects'));
app.use('/lib', express.static('lib'));

app.get('/', function (req, res) {
	res.send('Nothing to see here! <br> Go to /projects/"nameofproject"');
});

app.listen(3080, function() {
	console.log('Express server listening on port 3080!');
});
