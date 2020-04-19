/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 17:06:22
 * @Desc: store初始化 创建 redux store
 */
import {combineReducers, createStore, applyMiddleware} from 'redux'
import initModel, {runEffect} from './lib/initModel'
import logger from './lib/logger'

// 引入各个model
import test from './model/test'

// 把model转成reducers
const {reducers, effects} = initModel({test})
// 合并 reducers
const reducer = combineReducers(reducers)
// 创建store
const store = createStore(reducer, applyMiddleware(logger))
export const effect = runEffect(effects, store.dispatch)
export default store
