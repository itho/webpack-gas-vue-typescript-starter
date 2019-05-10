// @ts-ignore
const path = require('path');
// @ts-ignore
const merge = require('webpack-merge');
// @ts-ignore
const CleanWebpackPlugin = require('clean-webpack-plugin');
// @ts-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const common = require('./webpack.common.ts');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 9090
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
});