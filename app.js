var express = require('express');
var chalk = require('chalk');
var swig = require('swig');
var app = express(); // creates an instance of an express application
var port = 3000;
var loggerMessage = chalk.bold.green;
//Logging Middleware
app.use(function(req, res, next){
  console.log("Method: " + loggerMessage(req.method) + " Path: " + loggerMessage(req.path));
  next();
});


app.get('/', function(req, res, next ){
  res.send("HELLO WELCOME FRIEND");
});







app.listen(port, function(){
    console.log("listening to port: " + port);
});
