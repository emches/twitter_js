var chalk = require('chalk');
var swig = require('swig');
var express = require('express');
var bodyParser = require('body-parser');
var app = express(); // creates an instance of an express application
var port = 3000;
var loggerMessage = chalk.bold.green;
var routes = require('./routes/');
var socketio = require('socket.io');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes(io));
// Logging Middleware
app.use(function(req, res, next){
  console.log("Method: " + loggerMessage(req.method) + " Path: " + loggerMessage(req.path));
  next();
});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

socketio.on('connection', function(socket){
  socket.on('new_tweet', function(msg){
    socketio.emit('new_tweet', msg);
  });
});

// Starts server on specified port
var server = app.listen(port, function(){
  console.log("Listening on port: " + port);
});
var io = socketio.listen(server);
