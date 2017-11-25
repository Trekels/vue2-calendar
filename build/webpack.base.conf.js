const path = require('path');
const webpack = require('webpack');

const config = require('../config/prod.env');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: config.prod.entry,
  },
  output: {
    filename: config.prod.lib,
    publicPath: '/'
  },
  resolve: {
    extensions: config.prod.extensions,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
};
