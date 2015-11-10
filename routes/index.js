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
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.list();
  var userList = list.filter(function(item){
    return item.name === name;
  });
  console.log(userList);
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: userList } );
});

// router.get('/stylesheets/style.css', function(req,res){
//   res.sendFile('../public/stylesheets/style.css');
// })



module.exports = router;
