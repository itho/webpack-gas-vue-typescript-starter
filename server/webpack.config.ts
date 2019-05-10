// @ts-ignore
const path = require('path');
const glob = require("glob");
const CopyPlugin = require('copy-webpack-plugin');
const GasPlugin = require("gas-webpack-plugin");

module.exports = [
  {
    mode: 'production',
    optimization: {
      minimize: false
    },
    entry: {
      main: './server/main.ts',
    },
    output:
    {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../build')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new CopyPlugin([
        'appsscript.json',
        '.clasp.json'
      ]),
      new GasPlugin()
    ]
  },
  {
    mode: 'production',
    optimization: {
      minimize: false
    },
    entry: glob.sync("./server/functions/*/index.ts"),
    output:
    {
      filename: 'functions.bundle.js',
      path: path.resolve(__dirname, '../build')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new GasPlugin()
    ]
  },
  // {
  //   mode: 'production',
  //   optimization: {
  //     minimize: false
  //   },
  //   entry: glob.sync("./server/services/*.ts"),
  //   output:
  //   {
  //     filename: 'services.bundle.js',
  //     path: path.resolve(__dirname, '../build')
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         exclude: /node_modules/,
  //         use: 'ts-loader',
  //       }
  //     ]
  //   },
  //   resolve: {
  //     extensions: ['.tsx', '.ts', '.js']
  //   },
  //   plugins: [
  //     new GasPlugin()
  //   ]
  // },
  {
    mode: 'production',
    optimization: {
      minimize: false
    },
    entry: glob.sync("./server/utils/*.ts"),
    output:
    {
      filename: 'utils.bundle.js',
      path: path.resolve(__dirname, '../build')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new GasPlugin()
    ]
  }
];
