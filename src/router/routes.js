import uniloc from 'uniloc'
import * as PAGES from 'pages'

const content = {
  home: {
    page: PAGES.Home,
    route: 'GET /'
  },
  oauth2MiddlewareRedirect: {
    page: PAGES.Login,
    route: 'GET /login'
  },
  logout: {
    page: PAGES.Logout,
    route: 'GET /logout'
  },
  oauth2GoogleCallback: {
    page: PAGES.OAuth2GoogleCallback,
    route: 'GET /oauth2_google_callback'
  }
}

const reduceOnProperty = p =>
  Object.entries(content).reduce(
    (a, [k, v]) => ({
      ...a,
      [k]: v[p]
    }),
    {}
  )

export const pages = reduceOnProperty('page')
export const routes = uniloc(reduceOnProperty('route'))
