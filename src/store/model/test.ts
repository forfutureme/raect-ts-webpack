/**
 * @format
 * @Author: huweijian
 * @Date: 2019-11-07 12:00:55
 * @Desc: model的示例
 */

import * as types from '@store/mutation-types'
// import {getPosterDetail} from 'api/test'
// eslint-disable-next-line no-unused-vars
import {objString, objSF, objMore} from '@customTypes/index'

interface effectParamsT {
  params: objSF
  conf: objString
}

export default {
  state: {
    id: 123
  },
  mutations: {
    [types.TEST_DETAIL_UPDATE]: (state: object, info: objString) => {
      return {
        ...state,
        ...info
      }
    }
  },
  effects: {
    [types.TEST_DETAIL_GET]: async (
      {params, conf = {}}: effectParamsT,
      {dispatch}: {dispatch: Function}
    ) => {
      // debugger
      // const detail = await getPosterDetail(params, conf)
      // console.log('detail', detail)
      console.log(params, conf)
      dispatch({
        type: types.TEST_DETAIL_UPDATE,
        payload: {
          info: {
            test: 1
          }
        }
      })
    }
  }
}
