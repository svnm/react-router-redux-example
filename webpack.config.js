const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssCssnext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './index',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({ title: 'Example', template: './index.html' })
  ]
}

/* plugins */
/*
const webpackPlugins = function (env) {
  if (env === 'development') {
    return [new webpackPlugins.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        URL: JSON.stringify(process.env.DEV_URL)
      }
    }), html];
  }
  if (env === 'production') {
    return [new webpack.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        URL: JSON.stringify(process.env.PROD_URL),
        GOOGLE_ANALYTICS_CODE: JSON.stringify(process.env.GOOGLE_ANALYTICS_CODE)
      }
    }), dedupePlugin, uglifyPlugin, htmlWebpackPlugin];
  }
};

const html = new htmlWebpackPlugin({ title: 'React Router Redux Example' });
const uglifyPlugin = new webpack.default.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const dedupePlugin = new webpack.default.optimize.DedupePlugin();
*/
