/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-20 18:02:49
 * @Desc: 基础类工具方法
 */
/**
 * 获取实时随机字符串
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536 + '', 10) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 等待t毫秒
 * @param t 毫秒数 默认 500
 * @returns {Promise<any>}
 */
export function wait(t = 500) {
  return new Promise(resolve => {
    let timer = setTimeout(() => {
      timer = null
      clearTimeout(timer)
      resolve()
    }, t)
  })
}
