/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 11:40:45
 * @Desc: request单元测试
 */
import request, {
  getUrl,
  getHeader,
  joinParams,
  headleResult,
  statusError
} from '../request'
// let globals: {ENV: string}
// beforeAll(() => {
//   return (globals.ENV = 'dev')
// })

describe('request单元测试', () => {
  describe('getUrl方法测试', () => {
    it('01-getUrl默认host', () => {
      const url = getUrl('abc')
      expect(url).toEqual('https://pre.aijiatui.com/abc')
    })
  })
  describe('getHeader方法测试', () => {
    it('01-getHeader默认参数', () => {
      const obj = getHeader({})
      expect(obj['i-token']).toEqual('')
      expect(obj['Content-Type']).toEqual('application/json')
      expect(obj['Accept']).toEqual('application/json, text/plain, */*')
    })
    it('02-getHeader修改Content-Type类型', () => {
      const obj = getHeader({contentType: 'formData'})
      expect(obj['i-token']).toEqual('')
      expect(obj['Content-Type']).toEqual('multipart/form-data')
      expect(obj['Accept']).toEqual('application/json, text/plain, */*')
    })
  })
  describe('joinParams方法测试', () => {
    it('01-joinParams默认参数', () => {
      const params = joinParams({a: 1})
      expect(params).toEqual({a: 1})
    })
    it('02-joinParams默认参数', () => {
      const params = joinParams({a: 1}, 'stringify')
      expect(params).toEqual('a=1')
    })
    it('03-joinParams默认参数', () => {
      const params = joinParams({a: 1, b: 2}, 'stringify')
      expect(params).toEqual('a=1&b=2')
    })
  })
  describe('headleResult方法测试', () => {
    it('01-result-status-非200测试', () => {
      expect(() => headleResult({status: 100, msg: 'error'})).toThrowError(
        new Error('error')
      )
    })
    it('02-result-status-200-code非200', () => {
      expect(() =>
        headleResult({
          status: 200,
          msg: 'error',
          data: {code: 400, msg: 'error'}
        })
      ).toThrowError(new Error('error'))
    })
    it('02-result-status-200-code非0', () => {
      expect(() =>
        headleResult({
          status: 200,
          msg: 'error',
          data: {code: 100, msg: 'error'}
        })
      ).toThrowError(new Error('error'))
    })
    it('02-result-status-200-code-0', () => {
      const res = headleResult({
        status: 200,
        msg: 'error',
        data: {code: 0, msg: 'ok', data: 'ok'}
      })
      expect(res).toEqual('ok')
    })
    it('02-result-status-200-code-200', () => {
      const res = headleResult({
        status: 200,
        msg: 'error',
        data: {code: 200, msg: 'ok', data: 'ok'}
      })
      expect(res).toEqual('ok')
    })
  })
  describe('statusError方法测试', () => {
    it('01-挂了的返回', () => {
      const res = statusError({})
      expect(res).toEqual(undefined)
    })
    it('02-401错误', () => {
      const res = statusError({response: {status: 401}})
      expect(res).toEqual('未授权，请登录')
    })
    it('02-404错误', () => {
      const res = statusError({
        response: {status: 404, config: {url: 'http://localhost'}}
      })
      expect(res).toEqual('请求地址出错http://localhost')
    })
  })
  describe('request方法测试', () => {
    it('01-默认测试', async () => {
      const res = await request(
        'article/ddd',
        {},
        {method: 'GET', hostType: 'bob'}
      )
      expect(res).toEqual(undefined)
    })
    it('02-默认测试-get', async () => {
      const res = await request(
        'article/music/page',
        {},
        {method: 'GET', hostType: 'bob'}
      )
      expect(typeof res).toEqual('object')
    })
    it('03-默认测试-post', async () => {
      const res = await request(
        'article/music/page',
        {},
        {method: 'POST', hostType: 'bob'}
      )
      expect(typeof res).toEqual('undefined')
    })
    it('02-request.get', async () => {
      const res = await request.get('article/music/page', {}, {hostType: 'bob'})
      expect(typeof res).toEqual('object')
    })
    it('03-request.post', async () => {
      const res = await request.post(
        'article/music/page',
        {},
        {hostType: 'bob'}
      )
      expect(typeof res).toEqual('undefined')
    })
  })
})
