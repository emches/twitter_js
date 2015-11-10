var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');

router.use(function(req, res, next){
    filePath = path.join(__dirname, '../public', req.path);
    var checkFile = fs.lstat(filePath, function(err, stats){
      if (!err && stats.isFile() ){
          res.sendFile(filePath, next);
      }
      else next();
    });
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({name: name});
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets } );
});

router.get('/users/:name/tweets/:id', function(req, res){
  var tweetId = req.params.id;
  var name = req.params.name;
  var tweets = tweetBank.find({id: parseInt(tweetId)});
  res.render( 'index', { title: 'Twitter.js - Posted by '+name, tweets: tweets } );
});
// router.get('/stylesheets/style.css', function(req,res){
//   res.sendFile('../public/stylesheets/style.css');
// })



module.exports = router;
