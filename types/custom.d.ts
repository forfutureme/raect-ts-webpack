/**
 * @format
 * @Author: huweijian
 * @Date: 2020-01-09 10:33:57
 * @Desc: 定义一些ts不认识的模块的type
 */
/* eslint-disable no-unused-vars */
// svg 的type
declare module '*.svg' {
  const content: any
  export default content
}
// jpg 的type
declare module '*.jpg' {
  const content: any
  export default content
}
// png 的type
declare module '*.png' {
  const content: any
  export default content
}

// jpeg 的type
declare module '*.jpeg' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}

declare const ENV: string
