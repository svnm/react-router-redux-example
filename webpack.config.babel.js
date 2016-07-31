'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');
var _path2 = _interopRequireDefault(_path);
var _dotenv = require('dotenv');
var _dotenv2 = _interopRequireDefault(_dotenv);
var _webpack = require('webpack');
var _webpack2 = _interopRequireDefault(_webpack);
var _htmlWebpackPlugin = require('html-webpack-plugin');
var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);
var _webpackPlugins = require('./webpack-plugins');
var _webpackPlugins2 = _interopRequireDefault(_webpackPlugins);
var _postcssCssnext = require('postcss-cssnext');
var _postcssCssnext2 = _interopRequireDefault(_postcssCssnext);
var _postcssImport = require('postcss-import');
var _postcssImport2 = _interopRequireDefault(_postcssImport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ silent: true });

exports.default = {
  devtool: 'inline-source-map',
  entry: './index.js',
  output: {
    path: _path2.default.resolve(__dirname, 'public'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
    hash: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
      }
    }, {
      test: /\.css$/,
      loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'postcss']
    }]
  },
  postcss: [(0, _postcssImport2.default)(), (0, _postcssCssnext2.default)({ browsers: ['last 2 versions'] })],
  devServer: {
    historyApiFallback: true
  },
  plugins: (0, _webpackPlugins2.default)('development')
};
