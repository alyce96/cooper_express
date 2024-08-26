var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var word = [
  { name: 'Mongo', def: 'Scalable and flexiable document database' },
  { name: 'Express', def: 'Web application framework for node.js' },
  { name: 'Angular', def: 'Builds Dynamic Web apps and moblie sites' },
  { name: 'Node.js', def: 'Open source platform that provides a runtime enviorment' },
  
  ];

  // create a name
var myname = "Alyce Cooper";

res.render('index', {
title: 'MEAN STACK',
word:word ,
myname: 'Alyce'
});
});

module.exports = router;