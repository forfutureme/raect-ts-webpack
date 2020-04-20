/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 09:14:40
 * @Desc: 父组件条调用子组件方法--父组件
 * 父组件需要使用过useRef定义ref连接子组件
 */
import React, {useRef} from 'react'
import {Button} from 'antd'

import HelpFCallCFuncCh from './HelpFCallCFuncCh'

const HelpFCallCFunc: React.FC = () => {
  const FCallCFuncRef = useRef(null)
  return (
    <div>
      <h3>调用子组件方法的父组件--父组件</h3>
      <Button
        onClick={() => {
          FCallCFuncRef.current.coon()
        }}>
        调用子组件方法
      </Button>
      <HelpFCallCFuncCh ch="ch" />
    </div>
  )
}

export default HelpFCallCFunc
