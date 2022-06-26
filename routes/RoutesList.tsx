import React, { Fragment, Suspense } from 'react'
import { RouteItem } from 'utils/types'
import { Route, Routes } from 'react-router-dom'
import { PATH_NAME } from 'constants/index'

import BaseLayout from 'containers/Layouts/BaseLayout'

const routes: RouteItem[] = [
  {
    path: '/',
    component: BaseLayout,
    routes: [
      {
        path: PATH_NAME.HOME,
        component: React.lazy(() => import('containers/Demand')),
      },
      {
        path: PATH_NAME.RUNNING,
        component: React.lazy(() => import('containers/Running')),
      },
      {
        path: PATH_NAME.COMPLETION,
        component: React.lazy(() => import('containers/Completion')),
      },
      {
        path: PATH_NAME.FAIL_CANCEL,
        component: React.lazy(() => import('containers/FailCancel')),
      },
    ],
  },
]

const renderRoutes = (routes: RouteItem[]) => {
  return routes?.map((route: RouteItem, idx: number) => {
    const Component = route.component
    const Guard = route.guard || Fragment

    return (
      <Route
        key={`routes-${idx}`}
        path={route.path}
        element={
          <Guard>
            <Suspense fallback={<></>}>
              <Component />
            </Suspense>
          </Guard>
        }
      >
        {route.routes && renderRoutes(route.routes)}
      </Route>
    )
  })
}

function RoutesList() {
  return <Routes>{renderRoutes(routes)}</Routes>
}

export default RoutesList
