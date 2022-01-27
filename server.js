var express = require('express');
var app = express();
var fs = require("fs");

app.get('', function (req, res) {
   fs.readFile("users.json", function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(4002);