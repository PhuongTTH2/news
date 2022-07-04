import React, { Fragment, Suspense } from 'react'
import { RouteItem } from 'utils/types'
import { Route, Routes,Navigate } from 'react-router-dom'
import { pathName } from 'constants/index'
// import BaseLayout from 'container/Layouts/BaseLayout'
// import { isEmpty } from 'lodash'
const accessToken = localStorage.getItem('accessToken')
const routes: RouteItem[] = [
    {
      path: pathName.HOME,
      component: React.lazy(() => import('container/PublicPage/PublicPage')),
      noAuth: true
    },
    {
      path: pathName.WRITING,
      component: React.lazy(() => import('container/Writing/Writing')),
      noAuth: accessToken
    },
    {
      path: pathName.LOUNGE,
      component: React.lazy(() => import('container/Lounge/Lounge')),
      noAuth: accessToken
    },
    {
      path: pathName.PROFILE,
      component: React.lazy(() => import('container/Profile/Profile')),
      noAuth: accessToken
    },
    {
      path: pathName.PERSONAL_PROFILE,
      component: React.lazy(() => import('container/PersonalProfile/PersonalProfile')),
      noAuth: accessToken
    },
    {
      path: pathName.CREATE_RELIGION,
      component: React.lazy(() => import('container/CreateReligion/CreateReligion')),
      noAuth: accessToken
    },
    {
      path: pathName.SET_MEMBERSHIP,
      component: React.lazy(() => import('container/SetMemberShip/SetMemberShip')),
      noAuth: accessToken
    },
    {
      path: pathName.TERMS,
      component: React.lazy(() => import('container/PublicPage/StaticPage/TermsServices')),
      noAuth: true
    },
    {
      path: pathName.PRIVACY,
      component: React.lazy(() => import('container/PublicPage/StaticPage/Privacy')),
      noAuth: true
    },
    {
      path: pathName.PROGRAM_POLICIES,
      component: React.lazy(() => import('container/PublicPage/StaticPage/ProgramPolicies')),
      noAuth: true
    },
    {
      path: pathName.USER_AGREEMENT,
      component: React.lazy(() => import('container/PublicPage/StaticPage/UserAgreement')),
      noAuth: true
    },
    {
      path: pathName.ABOUT_US,
      component: React.lazy(() => import('container/PublicPage/StaticPage/AboutUs')),
      noAuth: true
    },
]
const renderRoutes = (routes: RouteItem[]) => {
  return routes?.map((route: RouteItem, idx: number) => {
    const Component = route.component
    const Guard = route.guard || Fragment
    return (
      // route.noAuth ? (
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
        </Route>
      // ) :(
      //   ""
      // )
    )
  })
}

function RoutesList() {
    return  <Routes>{renderRoutes(routes)}</Routes>
}

export default RoutesList
