var express = require('express');
var router = express.Router();
var getPackage = require('../getPackage');

router.get('/', function(req, res) {

  var packageName = req.param('npmPackage')
  getPackage(packageName, function (error, response, body) {

    if (error) {
      //console.log("We’ve encountered an error: " + error);
    }

    res.json({ npmPackage: JSON.parse(body) })

  })


});

module.exports = router;
