// packages

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// create the app

var app = express();

// port

var PORT = process.env.PORT || 3000;

// use bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// listener

app.listen(PORT, function() {
  console.log("We here " + PORT);
});