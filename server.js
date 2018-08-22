var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');

app.use(express.static(path.join(__dirname, '')));

app.listen(port);

console.log("Listening on port " + port + "...");