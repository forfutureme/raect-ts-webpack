/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 18:05:59
 * @Desc: base 基础类工具方法单元测试
 */
import {createUniqueString, wait} from '../base'

describe('base类工具方法测试', () => {
  describe('createUniqueString测试', () => {
    it('01-产生随机字串', () => {
      const result = createUniqueString()
      expect(typeof result).toEqual('string')
    })
  })
  describe('wait测试', () => {
    it('01-默认时间间隔', async () => {
      const timeStart = Date.now()
      await wait()
      const timeEnd = Date.now()
      expect(timeEnd - timeStart >= 500).toEqual(true)
    })
    it('01-自定义时间间隔', async () => {
      const timeStart = Date.now()
      await wait(1000)
      const timeEnd = Date.now()
      expect(timeEnd - timeStart >= 1000).toEqual(true)
    })
  })
})
