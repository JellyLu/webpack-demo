const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle-[hash].js"
  },
  devtool: "eval-source-map",
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
