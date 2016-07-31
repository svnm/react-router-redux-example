import express from 'express'
import webpack from 'webpack'
//import webpackDevMiddleware from 'webpack-dev-middleware'
//import webpackConfig from './webpack.config.dev'

const app = express();

/* Add headers */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/* api endpoints */

const npmPackages = require('./api/routes/npmPackages')
app.use('/api/npmPackages', npmPackages)

const npmPackage = require('./api/routes/npmPackage')
app.use('/api/npmPackage', npmPackage)

/*
app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));
app.use('/public', express.static(__dirname + '/public'))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
*/
app.listen(3000, 'localhost', function (err) {
  if (err) { console.log(err); return; }
  console.log('listening on http://127.0.0.1:3000')
})
