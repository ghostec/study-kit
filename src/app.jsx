import React from 'react'
import 'components/common/icons'
import { routes, pages, Router } from 'router'
import OAuth2Middleware from 'router/oauth2Middleware'

let middlewares = OAuth2Middleware(null)

export default () => (
  <Router
    middlewares={middlewares}
    routes={routes}
    pages={pages}
  />
)
