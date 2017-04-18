var express = require('express');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var ObjectID= require('mongodb').ObjectID;
var bodyParser = require('body-parser');

var app = express();

// Database Connection Information
var db;
var mongodbURL;

// Get env vars
var programm_name = process.argv[0];
var script_path = process.argv[1];
var port_string = process.argv [2];
var env_value = process.argv[3];

console.log("programm_name=" + programm_name);
console.log("script_path=" + script_path);
console.log("port_string=" + port_string);

var port_value = "4444";

if (typeof port_string !== "undefined" && port_string.length > 0) {
		port_value = port_string;
}

app.get('/hello', function(req, res) {
	res.type('text/plain');
	res.send('I am a beautiful butterfly');
});

app.listen(Number(port_value));
console.log('Server Runnning...');

console.log("Hello Noddy");
