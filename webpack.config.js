const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssCssnext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'prod'

function plugins() {
  if(env === 'prod'){
    return [
      new ExtractTextPlugin('style.css', { allChunks: true }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production')} }),
      new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
  }
  return [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new HtmlWebpackPlugin({ title: 'Example', template: './index.html' })
  ]
}

function loaders() {
  return [
    {
      test: /\.js$/,
      loader: 'babel', exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
      }
    },
    {
      test: /\.css$/i,
      loader: ExtractTextPlugin.extract('style',
        `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`),
    }
  ]
}

function entry() {
  if(env === 'prod'){
    return {
      app: './index',
      vendor: [ 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
    }
  }
  return { app: './index'}
}

function output() {
  if(env === 'prod'){
    return {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    }
  }
  return {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  }
}

var devtool = 'inline-source-map'
if(env === 'prod'){ devtool = 'hidden-sourcemap' }

/* config */
module.exports = {
  devtool: devtool,
  entry: entry(),
  output: output(),
  module: { loaders: loaders() },
  postcss: [ postcssCssnext({ browsers: ['last 2 versions'] }) ],
  devServer: { historyApiFallback: true },
  plugins: plugins()
}
