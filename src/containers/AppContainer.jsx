import React, {lazy, Suspense} from 'react'
import {Spin} from 'antd'
import {Switch, Route} from 'react-router-dom'
import {BaseLayout} from '../layouts'

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
]

const AppContainer = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<Spin />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </BaseLayout>
  )
}

export default AppContainer
