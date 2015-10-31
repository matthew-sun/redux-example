var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './public/app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({  
        __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      minimize: true
    })
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'public/app')
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
  }
};
