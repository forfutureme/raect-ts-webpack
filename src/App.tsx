/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 09:18:32
 * @Desc: 开发时入口文件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {RouterComponent} from './router'
import {Provider} from 'react-redux'
import store from '@store/index'
import './App.scss'

ReactDOM.render(
  <div className="main">
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </div>,
  document.getElementById('app')
)
