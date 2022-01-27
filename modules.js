var http = require('http');

// Create a server object:
http.createServer(function (req, res) {

	// Write a response to the client
	res.write('You are on right track');

	// End the response
	res.end();
}).listen(8082);
