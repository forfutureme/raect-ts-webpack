/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 16:57:29
 * @Desc: 简单的日志输出中间件
 */
// eslint-disable-next-line no-unused-vars
import {actionT} from './initModel'
interface loggerProps {
  getState: Function
  [key: string]: any
}
const logger = ({getState}: loggerProps) => {
  return (next: Function) => (action: actionT) => {
    console.log('dispatch执行前', getState())
    console.log('dispatch执行', action)
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    const returnValue = next(action)
    console.log('dispatch执行结束', getState())
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

export default logger
