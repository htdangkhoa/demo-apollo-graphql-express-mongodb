var webpack = require('webpack')
const path = require('path');
const NodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: false
  },
  entry: [path.resolve(__dirname, './src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [NodeExternals()],
  plugins: [
    new NodemonPlugin(),
    new UglifyJsPlugin()
  ],
  devtool: 'source-map'
};