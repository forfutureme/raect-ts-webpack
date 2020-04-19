/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 08:55:15
 * @Desc: 开发时配置
 */

// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./webpack.base.conf')
const port = process.env.port

module.exports = Object.assign({}, config, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/App.tsx'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        /* additional options here */
      })
    ]
  },
  devtool: 'source-map',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'public/')
  // },
  plugins: config.plugins.concat([
    // new HtmlWebpackPlugin({
    //   title: require('../package.json').description,
    //   template: './index.html'
    // })
  ]),
  // 持续监听文件变化 确保实时编译
  watch: true,
  watchOptions: {
    poll: 1000, // 每秒询问多少次
    aggregateTimeout: 500, //防抖 多少毫秒后再次触发
    ignored: /node_modules/ //忽略时时监听
  },

  devServer: {
    port,
    historyApiFallback: true,
    stats: 'errors-only',
    proxy: {}
    // filename: 'bundle.js',
    // contentBase: 'public',
    // watchContentBase: true
  }
})
