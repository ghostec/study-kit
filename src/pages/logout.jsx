import React from 'react'
import { history } from 'router/router'

class Logout extends React.Component {
  componentDidMount = async () => {
    window.localStorage.clear()
    history.push('/')
  }

  render = () => <div />
}

export default Logout
