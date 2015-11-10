var express = require('express');
var chalk = require('chalk');
var swig = require('swig');
var app = express(); // creates an instance of an express application
var port = 3000;
var loggerMessage = chalk.bold.green;

var data = {
    title: 'An Example',
    people: [{
        name: 'Gandalf',
    }, {
        name: 'Frodo'
    }, {
        name: 'Hermione'
    }]
};

// Logging Middleware
app.use(function(req, res, next){
  console.log("Method: " + loggerMessage(req.method) + " Path: " + loggerMessage(req.path));
  next();
});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Handles root route, renders index template
app.get('/', function (req, res) {
  res.render('index', data);
});

// Starts server on specified port
app.listen(port, function(){
  console.log("Listening on port: " + port);
});
