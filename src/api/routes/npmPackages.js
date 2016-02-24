var express = require('express');
var router = express.Router();
var getPackages = require('../getPackages');

router.get('/', function(req, res) {

  var keyword = req.param('keyword');

  getPackages(keyword, function (error, response, body) {

    if (error) {
      console.log("We’ve encountered an error: " + error);
    }

    res.json({ npmPackages: JSON.parse(body) })

  })

});

module.exports = router;
