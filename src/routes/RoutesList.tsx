import React, { Fragment, Suspense } from 'react'
import { RouteItem } from 'utils/types'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { pathName } from 'constants/index'
import BaseLayout from 'container/Layouts/BaseLayout'
import { isEmpty } from 'lodash'

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
        path: pathName.WRITING,
        component: React.lazy(() => import('container/Writing/Writing')),
      },
      {
        path: pathName.LOUNGE,
        component: React.lazy(() => import('container/Lounge/Lounge')),
      },
      {
        path: pathName.PROFILE,
        component: React.lazy(() => import('container/Profile/Profile')),
      },
      {
        path: pathName.PERSONAL_PROFILE,
        component: React.lazy(() => import('container/PersonalProfile/PersonalProfile')),
      },
      {
        path: pathName.CREATE_RELIGION,
        component: React.lazy(() => import('container/CreateReligion/CreateReligion')),
      },
      {
        path: pathName.SET_MEMBERSHIP,
        component: React.lazy(() => import('container/SetMemberShip/SetMemberShip')),
      },
    ] ,
  },
]
const routeslogin: RouteItem[] = [
  {
    path: '/',
    component: BaseLayout,
    routes: [
      {
        path: pathName.HOME,
        component: React.lazy(() => import('container/PublicPage/PublicPage')),
        
      }
    ] ,
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
  console.log(localStorage.getItem('accessToken'))
  // if(!isEmpty(localStorage.getItem('accessToken'))) {
    return <Routes>{renderRoutes(routes)}</Routes>
  // }else{
  //   return <Routes>{renderRoutes(routeslogin)}</Routes>
  // }
}

export default RoutesList
