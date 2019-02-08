var express = require('express');
var router = express.Router();
//var moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res, next) {

  //res.send('respond with a resource'+ moment().format());
  res.send('respond with a resource'+ moment().format());

});

module.exports = router;
