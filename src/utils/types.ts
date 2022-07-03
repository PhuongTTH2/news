import { ComponentType } from 'react'

export type Route = {
    exact?: boolean
    path?: string
    guard?: React.LazyExoticComponent<ComponentType<unknown>> | ComponentType<unknown>
    layout?: React.FunctionComponent
    component?: any
    noAuth?: any
}

export type RouteItem = Route & {
    routes?: Route[]
}
