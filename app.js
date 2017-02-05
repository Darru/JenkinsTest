var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Hello, World');
});

app.listen(process.env.port || 5000);

module.exports = app;