/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 17:56:10
 * @Desc: 定义可能会用到的类型
 */
// 基础类型接口

// 一个包含值类型全部都是字符串的对象
export type objString = {
  [k: string]: string
}
// 一个包含值类型全部都是字符串的对象
export type objNumber = {
  [k: string]: number
}
// 一个包含值类型全部都是函数的对象
export type objFun = {
  [k: string]: Function
}
// 包含字符串或数字的类型的对象
export type objSN = {
  [k: string]: string | number
}
// 包含字符串或函数的类型的对象
export type objSF = {
  [key: string]: Function | string
}
// 包含所有但一类型值的对象
export type objMore = {
  [k: string]: string | number | null | undefined | true | false
}
// 包含所有但一类型值和函数的对象
export type objAll = {
  [k: string]: string | number | null | undefined | true | false | Function
}

// store会用到的类型
export type stateT = {
  [k: string]: objMore
}
