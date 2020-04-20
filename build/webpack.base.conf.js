/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 08:50:29
 * @Desc: webpack基础配置
 */

const path = require('path')
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

const env = process.env.NODE_ENV
const port = process.env.port
const postcssLoader = require('../postcss.config')

if (env) {
  console.log(
    chalk.cyan(
      ' Starting the ' +
        chalk.bgGreen(chalk.black(`${env || ' develop '}`)) +
        ' env...'
    )
  )
}
module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.svg'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@lib': path.resolve(__dirname, '../src/lib'),
      '@config': path.resolve(__dirname, '../src/config'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@customTypes': path.resolve(__dirname, '../src/customTypes'),
      '@view': path.resolve(__dirname, '../src/view'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@router': path.resolve(__dirname, '../src/router'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@image': path.resolve(__dirname, '../src/assets/image'),
      '@svg': path.resolve(__dirname, '../src/assets/svg'),
      '@scss': path.resolve(__dirname, '../src/assets/scss')
    }
  },
  module: {
    // unknownContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true, //（可选）
          getCustomTransformers: () => ({
            before: [
              // ts版本的babel-plugin-import
              tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: 'css'
              })
            ]
          })
        }
      },
      // css样式文件
      {
        test: /\.css$/,
        use: [
          env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          postcssLoader
        ]
      },
      // less样式文件
      {
        test: /\.less$/,
        use: [
          env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          postcssLoader,
          'less-loader'
        ]
      },
      // scss样式文件
      {
        test: /\.s(c|a)ss$/,
        use: [
          env === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          postcssLoader,
          'sass-loader'
        ]
      },
      // 图片 音频文件
      {
        test: /\.(png|jpg|jpeg|gif|mp3)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      // svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {}
          }
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name]_[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // 写入js路劲到目标html页面
    new HtmlWebpackPlugin({
      title: require('../package.json').description,
      inject: 'body',
      template: './index.html',
      filename: 'index.html',
      chunksSortMode: 'none'
    }),
    // 打印日志
    new ProgressBarPlugin({
      format:
        chalk.green.bold('✔ Webpack') +
        ' [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false,
      width: 40,
      callback: () => {
        if (port) {
          console.log(
            '  App running at:  ' + chalk.cyan(`http://localhost:${port}/`)
          )
        }
      }
    })
  ],
  // 打印信息
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}
