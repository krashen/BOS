var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var CLIENT_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: CLIENT_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : CLIENT_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;