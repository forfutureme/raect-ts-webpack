/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 08:19:00
 * @Desc: Hello 事件例子
 */
import React from 'react'

interface props {
  click?: () => void
}

const HelloEvent: React.FC<props> = ({click}) => {
  return (
    <div>
      <h3>HelloEvent</h3>
      <button onClick={click}>点击我</button>
    </div>
  )
}

export default HelloEvent
