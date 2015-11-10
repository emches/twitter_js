var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');

router.use(function(req, res, next){
    filePath = path.join(__dirname, '../public', req.path);
    var checkFile = fs.lstatSync(filePath);

    console.log("Checked file: " + checkFile)
    if ( checkFile.isFile() ){
        console.log("found file " + checkFile);
        res.sendFile(filePath, next);
    }
    else next();
})

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

// router.get('/stylesheets/style.css', function(req,res){
//   res.sendFile('../public/stylesheets/style.css');
// })



module.exports = router;