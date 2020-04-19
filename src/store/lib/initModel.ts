/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 16:38:06
 * @Desc: 动态init 所有model
 */
export interface actionT {
  type: string
  payload: object
}
interface mutationT {
  [x: string]: Function
}
interface effectT extends mutationT {}
interface model {
  [key: string]: any
}
/**
 * 统一处理各个model的mutaion方法 触发state变化
 * @param {*} state
 * @param {*} action
 * @param {*} mutation
 * @returns
 */
const runMutaion = (state: object, action: actionT, mutation: mutationT) => {
  const {type, payload} = action
  const func = mutation[type]
  if (!func) {
    return state
  }
  return func(state, payload)
}

/**
 * 注册所有effect方法
 * @param {*} effects
 * @returns
 */
export const runEffect = (effects: effectT, dispatch: Function) => {
  return function({type, payload}: actionT) {
    const func = effects[type]
    if (!func) {
      throw new Error(`effect type ${type}不存在`)
    }
    func.call(null, payload, {dispatch})
  }
}

/**
 * 注册动态解析model结构体为reducer函数
 * @export
 * @param {*} models
 * @returns
 */
const initModel = (models: model) => {
  let reducers: {
    [x: string]: string | any
  } = {}
  let effects = {}
  const model = Object.keys(models)
  model.forEach(m => {
    const mod = models[m]
    effects = {
      ...effects,
      ...mod.effects
    }
    reducers[m] = (state = mod.state, action: actionT) => {
      return runMutaion(state, action, mod.mutations)
    }
  })
  return {reducers, effects}
}

export default initModel
