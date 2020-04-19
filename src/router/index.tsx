/**
 * @format
 * @Author: huweijian
 * @Date: 2020-04-16 16:08:30
 * @Desc: 路由
 */

import React from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import history from './history'

import Login from '@view/Login'
import Help from '@src/view/help/Help'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/help',
    component: Help
  }
]

type RouteType = {
  path: string
  [key: string]: any
}

const RouteWithSubRoutes: React.FC<RouteType> = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting

        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export const SubRouter: React.FC<[RouteType]> = routes => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}

export const RouterComponent: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          {/* 设置 / 默认页面  */}
          <Route path="/" exact component={Login} />

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          {/* <Redirect path="/" to="/app" /> */}
          {/* <Redirect path="*" to="/404" /> */}
          {/* 设置无匹配时 404页面 */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  )
}
