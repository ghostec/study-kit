const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin()
  ]
})
