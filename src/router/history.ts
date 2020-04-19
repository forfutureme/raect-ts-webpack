/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 16:22:43
 * @Desc: history方法
 */
import {createBrowserHistory as createHistory} from 'history'
// const {REACT_APP_FEA} = process.env
// const FEA_FIX = REACT_APP_FEA ? `/web/${REACT_APP_FEA}/` : '/'
// const basename =
//   process.env.NODE_ENV === 'development' ? '' : `${FEA_FIX}jiatui-mall`

// const location = window.location
const history = createHistory({
  basename: ''
})

export default history
