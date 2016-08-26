const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssCssnext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './index'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
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
  },
  postcss: [ postcssCssnext({ browsers: ['last 2 versions'] }) ],
  devServer: { historyApiFallback: true },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"dev"' }),
    new HtmlWebpackPlugin({ title: 'Example', template: './index.html' })
  ]
}
