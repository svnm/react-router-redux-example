var request = require("request");

function getPackages(keyword, cb) {

  var registryUrl = 'https://registry.npmjs.org';
  var dlCountUrl    = 'https://api.npmjs.org/downloads/point/last-week';
  var viewsPath     = '-/_view';
  var keywordView   = 'byKeyword';

  var query         = 'startkey=["' + keyword + '"]' 
      query        += '&endkey=["' + keyword + '",{}]'
      query        += '&group_level=3'

  var url = [registryUrl, viewsPath, keywordView].join('/') + '?' + query

  request(url, function (error, response, body) {
    cb(error, response, body)
  });

}

module.exports = getPackages