var http = require("http"),
	express = require('express');

var app = express();

app.post('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);