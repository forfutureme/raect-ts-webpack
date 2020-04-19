/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 17:28:21
 * @Desc: 执行多次hocks写法
 */
import React, {useEffect, useState} from 'react'
import {Button} from 'antd'

const HelpDoTimes: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`countTimes: ${count}`)
  }, [count])
  return (
    <div>
      只执行一次的hocks模拟, {count}{' '}
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1)
        }}>
        count+
      </Button>
    </div>
  )
}

export default HelpDoTimes
