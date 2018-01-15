var path = require("path");
var webpack = require("webpack");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    js: "./boot.js"
  },
  output: { path: __dirname, filename: "bundle.js" },
  devtool: "#eval-source-map",
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://localhost:8080/"
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
