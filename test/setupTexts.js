/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 07:50:26
 * @Desc: 单元测试启动配置
 */
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({adapter: new Adapter()})
