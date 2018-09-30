const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const ReactJssHmrPlugin = require('react-jss-hmr/webpack')
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  resolve: {
    plugins: [
      new ReactJssHmrPlugin()
    ]
  },
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
