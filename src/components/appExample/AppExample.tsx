/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 15:28:14
 * @Desc: 通用组件例子
 */
import React from 'react'

interface AppExampleProps extends React.HTMLAttributes<HTMLElement> {}

const AppExample: React.FC<AppExampleProps> = ({children}) => {
  return <div className="app-example">{children}</div>
}

export default AppExample
