/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 11:19:55
 * @Desc: 项目环境配置
 */
// eslint-disable-next-line no-unused-vars
import {objString} from '@customTypes/index'
type configT = {
  api: objString
  cosAccount: objString
}
// 默认配置
const defApi = {
  host: 'https://pre.aijiatui.com'
}
// 腾讯云上传配置
const cosAccount = {
  url: 'https://download.aijiatui.com',
  bucket: 'resource-1255821078',
  region: 'ap-guangzhou',
  resourceUrl: 'https://resource.aijiatui.com'
}
// 各环境配置
const config: {
  [k: string]: configT
} = {
  dev: {
    api: {
      ...defApi,
      bob: 'https://test-bob.aijiatui.com/'
    },
    cosAccount
  },
  test: {
    api: {
      ...defApi,
      host: 'https://test.aijiatui.com'
    },
    cosAccount
  },
  production: {
    api: {
      ...defApi,
      host: 'https://business.aijiatui.com'
    },
    cosAccount
  }
}

export default config[ENV || 'production']
