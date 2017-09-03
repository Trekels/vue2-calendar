const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'vueCalendar',
    libraryTarget: 'umd'
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
});

module.exports = webpackConfig;
