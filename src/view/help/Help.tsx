/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 16:31:53
 * @Desc: 帮助页
 */
import React from 'react'
import {Button} from 'antd'
import './Help.scss'

// eslint-disable-next-line no-unused-vars
import {stateT} from '@customTypes/index'
import Hello from './components/Hello'
import HelloEvent from './components/HelloEvent'
import HelloImage from './components/HelloImage'

import AppExample from '@components/appExample/AppExample'

// hocks使用
import HelpDoOnce from './components/HelpDoOnce'
import HelpDoTimes from './components/HelpDoTimes'
import HelpPropsChangeF from './components/HelpPropsChangeF'

import {useSelector, useDispatch} from 'react-redux'
// import {effect} from '@store/index'
import * as types from '@store/mutation-types'

const UseStore: React.FC = () => {
  const test = useSelector((state: stateT) => state.test)
  const dispatch = useDispatch()
  return (
    <div className="help">
      <h3>Hi: {test.id}</h3>
      <Button
        onClick={() => {
          dispatch({
            type: types.TEST_DETAIL_UPDATE,
            payload: {
              id: 345
            }
          })
        }}>
        修改id值
      </Button>
    </div>
  )
}

const Help: React.FC = () => {
  return (
    <>
      <UseStore />
      <Hello />
      <HelloEvent />
      <HelloImage />
      <AppExample>AppExample使用</AppExample>
      <HelpDoOnce />
      <HelpDoTimes />
      <HelpPropsChangeF />
    </>
  )
}

export default Help
