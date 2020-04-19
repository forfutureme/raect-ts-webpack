/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 07:54:43
 * @Desc: hello.js测试文件
 */
import {getHello} from '../hello'

describe('测试hello里的方法', () => {
  describe('hello方法', () => {
    it('不传参数', () => {
      const result = getHello()
      expect(result).toEqual('hehe')
    })
    it('传true', () => {
      const result = getHello(true)
      expect(result).toEqual('hello')
    })
  })
})
