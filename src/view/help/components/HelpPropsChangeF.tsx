/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 17:43:40
 * @Desc: 父子组件传递参数，该参数可能会被父子组件修改的例子---父组件
 */
import React, {useState} from 'react'
import {Button} from 'antd'
export type listType = {
  id: number
  del: boolean
}
export interface Types {
  list: listType[]
}

import HelpPropsChangeFC from './HelpPropsChangeFC'

const HelpPropsChangeF: React.FC = () => {
  const [list, setList] = useState<Types['list']>([
    {id: 1, del: false},
    {id: 2, del: true}
  ])

  const change = (list: Types['list']) => {
    setList([...list])
  }

  return (
    <div>
      <h3>父子组件传递参数，该参数可能会被父子组件修改的例子---父组件</h3>
      <Button
        onClick={() => {
          const l = [...list]
          l.push({
            id: l.length + 1,
            del: false
          })
          setList(l)
        }}>
        父组件修改数据
      </Button>
      <HelpPropsChangeFC list={list} change={change} />
    </div>
  )
}

export default HelpPropsChangeF
