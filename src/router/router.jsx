import React from 'react'
import { RouteContext } from 'containers/common/withRoute'
import createHistory from 'history/createBrowserHistory'
export const history = createHistory()

class Router extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      route: null,
      page: null
    }
  }

  componentDidMount = () => {
    history.listen(this.resolve)
    this.resolve(history.location)
  }

  resolve = location => {
    const route = this.props.routes.lookup(location.pathname + location.search)
    const page = this.props.pages[route?.name]
    this.setState({ route, page })
  }

  render = () => {
    if (!!this.state.page === false) {
      return <div />
    }

    const { pages, routes, middlewares } = this.props
    const args = { ...this.state, pages, routes }
    const mArgs = middlewares ? middlewares(args) : args
    console.log(
      'mArgs',
      mArgs
    )

    return (
      <RouteContext.Provider value={mArgs.route}>
        <mArgs.page {...mArgs} />
      </RouteContext.Provider>
    )
  }
}

export default Router
