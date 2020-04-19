/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 08:09:45
 * @Desc: Hello组件的单元测试文件
 */
import renderer from 'react-test-renderer'
import React from 'react'
import Hello from '../Hello'

describe('测试Hello组件', () => {
  it('测试基本渲染-他是一个div', () => {
    const json = renderer.create(<Hello />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
