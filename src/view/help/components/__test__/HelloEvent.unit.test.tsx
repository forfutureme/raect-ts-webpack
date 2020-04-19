/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 08:27:00
 * @Desc: HelloEvent 单元测试
 */
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react'

import HelloEvent from '../HelloEvent'

describe('HelloEvent组件', () => {
  it('测试组件渲染', () => {
    const json = renderer.create(<HelloEvent />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试组件渲染-传了click方法', () => {
    const fn = () => {
      console.log(0)
    }
    const json = renderer.create(<HelloEvent click={fn} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试点击方法', () => {
    const fn = jest.fn()
    const component = mount(<HelloEvent click={fn} />)
    component.find('button').simulate('click')
    expect(fn).toBeCalled()
  })
})
