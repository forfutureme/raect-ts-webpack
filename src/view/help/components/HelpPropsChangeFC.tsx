/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 17:43:40
 * @Desc: 父子组件传递参数，该参数可能会被父子组件修改的例子---父组件
 */
import React from 'react'
import {Button} from 'antd'
// eslint-disable-next-line no-unused-vars
import {Types} from './HelpPropsChangeF'
// import {listType} from './HelpPropsChangeF'
interface Props extends React.HTMLAttributes<HTMLElement> {
  list: Types['list']
  change: Function
}
const HelpPropsChangeFC: React.FC<Props> = ({list, change}) => {
  return (
    <div>
      <h3>父子组件传递参数，该参数可能会被父子组件修改的例子---子组件</h3>

      <div>
        <h4>渲染列表</h4>
        <ul>
          {list.map((l, i) => {
            return (
              <li key={l.id}>
                <label>{l.id}</label>
                <span>{l.del ? '已禁用' : '已开启'}</span>
                <Button
                  onClick={() => {
                    list[i].del = !l.del
                    change(list)
                  }}>
                  {l.del ? '关闭' : '开启'}
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HelpPropsChangeFC
