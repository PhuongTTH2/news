import React, { Fragment, Suspense } from 'react'
import { RouteItem } from 'utils/types'
import { Route, Routes } from 'react-router-dom'
import { pathName } from 'constants/index'

import BaseLayout from 'container/Layouts/BaseLayout'

const routes: RouteItem[] = [
  {
    path: '/',
    component: BaseLayout,
    routes: [
      {
        path: pathName.HOME,
        component: React.lazy(() => import('container/PublicPage/PublicPage')),
      },
      {
        path: pathName.MENU,
        component: React.lazy(() => import('container/Page/Page')),
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
