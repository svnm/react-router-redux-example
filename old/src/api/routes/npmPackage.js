var express = require('express');
var router = express.Router();
var request = require("request");

function getPackage(packageName, cb) {
  var registryUrl = 'https://registry.npmjs.org';
  var url = [registryUrl, packageName].join('/');

  request(url, function (error, response, body) {
    cb(error, response, body)
  });
}

router.get('/', function(req, res) {

  var packageName = req.query['npmPackage'] || ''
  getPackage(packageName, function (error, response, body) {

    if (error) {
      console.log("We’ve encountered an error: " + error);
    }
    res.json({ npmPackage: JSON.parse(body) })
  })

});

module.exports = router;
