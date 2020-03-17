var http = require('http'),
    express = require('express');

var app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, "192.168.1.9");