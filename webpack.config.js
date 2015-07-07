'use strict'

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Uglify = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var root = __dirname;

module.exports = {
  context: path.join(root, 'client'),
  devtool: 'sourcemap',
  output: {
    filename: 'js/bundle.js'
  },
  resolve: {
  	root: path.join(root, 'client'),
  	alias: {
  	},
  	modulesDirectories: ['node_modules', 'vendor', 'web_modules']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/app\/lib/, /node_modules/],
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.styl$/,
      // loader: 'style!css!stylus'
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader', {publicPath: '../'})
    }, {
      test: /\.css$/,
      // loader: 'style!css'
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {publicPath: '../'})
    }, {
    	test: /\.less$/,
    	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader', {publicPath: '../'})
    }, {
    	test: /\.(gif|png)$/,
    	loader: 'file-loader?name=images/[name].[ext]'
    }, {
    	test: /\.(woff|ttf|eot|svg|woff2)$/,
    	loader: 'file-loader?name=fonts/[name].[ext]'
    }]
  },
  plugins: [
  	new ExtractTextPlugin('css/[name].css'),
    new Uglify()
  ]
};
