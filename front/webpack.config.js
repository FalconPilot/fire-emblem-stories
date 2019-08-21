const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const ENVIRONMENTS = {
  DEV: 'development',
  PROD: 'production'
}

const ENV = process.env.NODE_ENV === ENVIRONMENTS.DEV ? ENVIRONMENTS.DEV : ENVIRONMENTS.PROD

module.exports = {
  mode: ENV,
  watch: ENV === ENVIRONMENTS.DEV,
  devtool: 'source-map',
  context: path.join(__dirname),
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
  },
  entry: {
    // 'babel-polyfill': '@babel/polyfill',
    // config: path.join(__dirname, 'src', 'config.js'),
    main: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
    filename: (
      ENV === ENVIRONMENTS.DEV
        ? '[name].js'
        : '[name].[hash].js'
    ),
    path: path.join(__dirname, '..', 'back', 'dist'),
    publicPath: '/app'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new CopyPlugin([
      { from: path.join(__dirname, 'src', 'static'), to: 'static' }
    ])
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.(css)$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: ['file-loader']
    }, {
      test: /\.(ts|tsx)$/,
      use: ['ts-loader']
    }]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
