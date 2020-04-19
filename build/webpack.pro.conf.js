/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 09:01:28
 * @Desc: 生产时配置
 */

const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const config = require('./webpack.base.conf')

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    index: './src/App.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[hash:8].js'
  },
  plugins: config.plugins.concat([
    // 清空原构建后的文件夹
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
    // 内置环境变量
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    // 使用css提取插件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]_[hash:8].css',
      chunkFilename: '[id]_[hash:8].css'
    }),
    // 开启gzip压缩
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css|less)$'),
      threshold: 10240,
      minRatio: 0.8
    })
  ])
})
