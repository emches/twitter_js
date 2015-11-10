var _ = require('underscore');
var data = [];
var counter = 0;

var add = function(name, text){

  var id = counter+=1;
  data.push({ name: name, text: text, id: id});
};

var list = function(){
  return _.clone(data);
};

var find = function(properties){
  return _.where(data, properties);
};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Jacob'];
  return randArrayEl(fakeFirsts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


// ORDER MATTERS
module.exports = { add: add, list: list, find: find };

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
console.log(data);
