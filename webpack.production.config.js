const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: "none",
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
    {
      test: /(\.jsx|\.js)$/,
      use: {
        loader: "babel-loader",
      },
      exclude: /node-modules/
    },
    {
      test:/\.css$/,
      use: [
        {loader:"style-loader"},
        {
          loader: "css-loader",
          options: {
            modules: true,
            camelCase: true
          }
        }
     ]
    }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Copyright @617@'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}
