import React from 'react'

export const RouteContext = React.createContext()

const WithRoute = WrappedComponent => props => (
  <RouteContext.Consumer>
    {route => <WrappedComponent {...props} route={route} />}
  </RouteContext.Consumer>
)

export default WithRoute
