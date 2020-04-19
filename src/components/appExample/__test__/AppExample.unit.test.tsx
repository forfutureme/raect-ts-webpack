/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-17 16:33:24
 * @Desc: AppExample单元测试
 */
import renderer from 'react-test-renderer'
import React from 'react'
import AppExample from '../AppExample'

describe('AppExample组件测试', () => {
  it('AppExample渲染测试', () => {
    const json = renderer
      .create(<AppExample>it is a AppExample</AppExample>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
