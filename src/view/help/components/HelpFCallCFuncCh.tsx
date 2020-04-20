/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 09:14:40
 * @Desc: 父组件条调用子组件方法--子组件
 * 子组件要提供需要被父组件调用的方法，并对自身进行特殊形式的包装
 * 第一步 使用useImperativeHandle函数标示需要被外部调用的方法
 * 第二步 使用forwardRef包裹整个组件并输出
 */
import React, {forwardRef, useImperativeHandle} from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  ch: string
}
interface handleProps {
  coon(): void
}

const HelpFCallCFuncCh: React.RefForwardingComponent<handleProps, Props> = (
  {ch},
  ref
) => {
  useImperativeHandle(ref, () => ({
    coon: () => {
      console.log('父组件条用了方法', ch)
    }
  }))
  return <div>父组件条调用子组件方法--子组件</div>
}

export default forwardRef(HelpFCallCFuncCh)
