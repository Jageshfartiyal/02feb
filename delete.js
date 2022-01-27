var express = require('express');
var app = express();
var fs = require("fs");

app.delete('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( "" + "users.json", function (err, data) {
      data = JSON.parse( data );
      delete data["user" + req.params.id];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});