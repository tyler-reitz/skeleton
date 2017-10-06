// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const PAGE_NOT_FOUND_DEMO_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
