/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 09:27:05
 * @Desc: HelloImage 单元测试
 */
import renderer from 'react-test-renderer'
import React from 'react'

import HelloImage from '../HelloImage'

describe('HelloImage测试', () => {
  it('测试渲染', () => {
    const json = renderer.create(<HelloImage />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
