// @ts-ignore
const path = require('path');
// @ts-ignore
const merge = require('webpack-merge');
// @ts-ignore
const webpack = require('webpack');
// @ts-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// @ts-ignore
const common = require('./webpack.common.ts');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
});
