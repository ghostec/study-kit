const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const env = [
  'API_HOST',
  'OAUTH2_ENABLED'
]

const envMapping = env.reduce(
  (acc, x) => ({
    ...acc,
    [`process.env.${x}`]: JSON.stringify(process.env[x])
  }),
  {}
)

module.exports = {
  entry: ['@babel/polyfill'],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve('./src')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./assets/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new webpack.DefinePlugin(envMapping)
  ]
}
