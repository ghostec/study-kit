import React from 'react'
import { history } from 'router'

class OAuth2GoogleCallback extends React.Component {
  componentDidMount = async () => {
    const { code } = this.props.route.options
    // await api.get(`/login?code=${code}`)
    history.push('/')
  }

  render = () => <div />
}

export default OAuth2GoogleCallback
