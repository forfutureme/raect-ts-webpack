/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 07:48:53
 * @Desc: hello 工具方法
 */
export const getHello = (mode?: false | true): string => {
  return mode ? 'hello' : 'hehe'
}
