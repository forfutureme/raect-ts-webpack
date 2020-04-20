/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 11:32:35
 * @Desc: 基于aioxs的ajax封装
 */
// eslint-disable-next-line no-unused-vars
import axios, {Method} from 'axios'
import qs from 'qs'
import config from '@config/index'
// 引入自定义类型
// eslint-disable-next-line no-unused-vars
import {objString, objFun, objMore} from '@customTypes/index'

const TIMEOUT: number = 100000

/**
 * 重组URL
 * @param path
 * @param hostType
 * @returns {string}
 */
export function getUrl(path: string, hostType?: string) {
  return `${config.api[hostType || 'host']}/${path}`
}

/**
 * 配置header
 * @param {*} {
 *   token,
 *   contentType = 'json',
 *   acceptType = 'normal',
 *   headerParams = {}
 * }
 * @returns
 */
export function getHeader({
  token = '',
  contentType = 'json',
  acceptType = 'normal',
  headerParams = {}
}) {
  const typeMap: objString = {
    form: 'application/x-www-form-urlencoded;charset=UTF-8',
    json: 'application/json',
    formData: 'multipart/form-data'
  }
  const acceptMap: objString = {
    normal: 'application/json, text/plain, */*',
    export:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
  }
  return {
    'i-token': token,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': typeMap[contentType],
    Accept: acceptMap[acceptType],
    ...headerParams
  }
}

/**
 * 重组参数
 * @param {*} paramsType
 * @param {*} params
 */
export function joinParams(
  params: object,
  paramsType: 'normal' | 'stringify' = 'normal'
) {
  const joinMap: objFun = {
    normal: () => {
      return params
    },
    stringify: () => {
      // return utils.base.paramToStr(params).replace(/\?/, '')
      return qs.stringify(params)
    }
  }
  return joinMap[paramsType]()
}
// 定义result类型
interface resultT {
  status: number
  msg?: string
  data?: {
    code: number
    msg: string
    data?: object | null | string
  } | null
}
/**
 * 处理请求结果
 * @param {*} result
 * @param {*} conf
 * @returns
 */
export function headleResult(result: resultT) {
  // 接口正常
  if (result.status === 200) {
    const res = result.data
    if (res.code === 200 || res.code === 0) {
      return res.data
    }
    throw new Error(res.msg || '接口异常')
  } else {
    throw new Error(result.msg || '请求失败')
  }
}
// 定义response类型
interface responseT {
  status: number
  config?: {
    url: string
  } & object
}
// 定义config类型
interface configT {
  response?: responseT & object
}
/**
 * 处理请求失败情况
 * @param {*} config
 */
export function statusError(config: configT & object) {
  console.error(config)

  const response = config.response
  if (!response) {
    // 防止某些接口挂掉，导致页面空白
    // message.error('系统错误')
    return
  }
  const {status} = response
  const msgMap: objString = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: `请求地址出错${response.config && response.config.url}`,
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP版本不受支持'
  }
  const funcMap: objFun = {
    401: (msg: string) => msg,
    404: (msg: string) => msg
  }
  return funcMap[status] && funcMap[status](msgMap[status])
}
// 定义conf类型
interface confT {
  method?: string
  hostType?: string
  token?: string
  timeout?: number
  contentType?: string
  acceptType?: string
  paramsType?: 'normal' | 'stringify'
  headerParams?: object
}
/**
 * 封装通用请求方法
 * @export
 * @param {*} path
 * @param {*} params
 * @param {*} conf
 * @returns
 */
export async function request(path: string, params?: object, conf?: confT) {
  try {
    const url = getUrl(path, conf.hostType)
    const headers = getHeader({
      token: conf.token,
      contentType: conf.contentType,
      acceptType: conf.acceptType,
      headerParams: conf.headerParams
    })
    let axiosResult
    // 如果是post请求
    if (conf.method && conf.method.toLocaleLowerCase() === 'post') {
      const opts = {
        method: 'POST' as Method,
        url: url,
        timeout: conf.timeout || TIMEOUT,
        // params: query
        data: joinParams(params, conf.paramsType)
      }

      axiosResult = await axios({
        ...opts,
        headers
      })
    } else {
      // get请求
      axiosResult = await axios.get(`${url}?${qs.stringify(params)}`, {
        headers: headers,
        timeout: conf.timeout || TIMEOUT
      })
    }
    return headleResult(axiosResult)
  } catch (err) {
    statusError(err)
  }
}

/**
 * get请求
 * @export
 * @param {*} path
 * @param {*} params
 * @param {*} conf
 * @returns
 */
export function get(path: string, params?: object, conf?: confT) {
  return request(path, params, {...conf, method: 'get'})
}

/**
 * post请求
 * @export
 * @param {*} path
 * @param {*} params
 * @param {*} conf
 * @returns
 */
export function post(path: string, params?: object, conf?: confT) {
  return request(path, params, {...conf, method: 'post'})
}

request.get = get
request.post = post
export default request
