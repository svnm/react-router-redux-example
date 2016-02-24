var request = require("request");

function getPackage(packageName, cb) {

  var registryUrl = 'https://registry.npmjs.org';
  var url = [registryUrl, packageName].join('/');

  request(url, function (error, response, body) {
    cb(error, response, body)
  });

}

module.exports = getPackage