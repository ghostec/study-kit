import React from 'react'
import GoogleButton from 'react-google-button'
import { oauth2Key } from 'router/oauth2Middleware'

class Login extends React.Component {
  state = {
    authUrl: '',
    show: false
  }

  _showLoginButton = async () => {
    // const authUrl = await api.get(`/login?state=${uuid()}`, {
    //   headers: { Accept: 'text/html' }
    // })
    // this.setState({ authUrl, show: true })
  }

  componentDidMount = async () => {
    const accessToken = window.localStorage.getItem(oauth2Key)
    if (!accessToken) {
      await this._showLoginButton()
    }
  }

  _renderActual = () => (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <a href={this.state.authUrl}>
        <GoogleButton />
      </a>
    </div>
  )

  render = () => {
    if (!this.state.show) {
      return <div />
    }

    return this._renderActual()
  }
}

export default Login
