const loginRouteKey = 'oauth2MiddlewareRedirect'
export const oauth2Key = 'oauth2Middleware:accessToken'

const OAuth2Middleware = next => ({ route, page, routes, pages, ...rest }) => {
  const args = { route, page, routes, pages, ...rest }
  if (process.env.OAUTH2_ENABLED === 'false') {
    return next ? next(args) : args
  }

  const accessToken = window.localStorage.getItem(oauth2Key)
  if (!accessToken && !route.options.code) {
    return {
      route: { name: loginRouteKey },
      page: pages[loginRouteKey],
      ...rest
    }
  }
  return next ? next(args) : args
}

export default OAuth2Middleware
