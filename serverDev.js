import express from 'express'
import webpack from 'webpack'

const app = express();

/* Add headers as webpack dev server runs on port 5000 */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
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

app.listen(3000, 'localhost', function (err) {
  if (err) { console.log(err); return; }
  console.log('listening on http://127.0.0.1:3000')
})
