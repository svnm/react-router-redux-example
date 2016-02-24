var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev');
var config = require('./package').config;

var app = express();

/* api endpoints */

const npmPackages = require('./src/api/routes/npmPackages')
app.use('/api/npmPackages', npmPackages)

const npmPackage = require('./src/api/routes/npmPackage')
app.use('/api/npmPackage', npmPackage)


app.use(require('webpack-dev-middleware')(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

app.use('/public', express.static(__dirname + '/public'))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(config.port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`listening on port: ${config.port}`)
})
