'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (env) {

  if (env === 'development') {
    return [new _webpack2.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        URL: JSON.stringify(process.env.DEV_URL)
      }
    }), htmlWebpackPlugin];
  }

  if (env === 'production') {
    return [new _webpack2.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        URL: JSON.stringify(process.env.PROD_URL),
        GOOGLE_ANALYTICS_CODE: JSON.stringify(process.env.GOOGLE_ANALYTICS_CODE)
      }
    }), dedupePlugin, uglifyPlugin, htmlWebpackPlugin];
  }
};

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ silent: true });

var htmlWebpackPlugin = new _htmlWebpackPlugin2.default({
  title: 'React Router Redux Example',
  template: './index.html'
});

var uglifyPlugin = new _webpack2.default.optimize.UglifyJsPlugin({
  compress: { warnings: false }
});

var dedupePlugin = new _webpack2.default.optimize.DedupePlugin();
