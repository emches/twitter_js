var express = require( 'express' );
var app = express(); // creates an instance of an express application
var port = 3000;



app.get('/', function(req, res, next ){
    console.log("REQ PATH: " + req.path )
    //console.log(res.status(200).send("You got 200"))
     res.send("HELLO WELCOME FRIEND")
})







app.listen(port, function(){
    console.log("listening to port: " + port);
})