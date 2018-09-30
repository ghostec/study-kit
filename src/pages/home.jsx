import React from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as colors from 'util/colors'
import * as fontSizes from 'util/fontSizes'

const styles = {
  circleNotch: {
    color: colors.orange['500'],
    fontSize: fontSizes.large['700'],
    transition: 'all ease-out 100ms',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all ease-in 100ms',
      color: colors.orange['400'],
      transform: 'scale(1.5, 1.5) rotate(45deg)'
    }
  }
}

class Home extends React.Component {
  render = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.flashcards.bg
      }}
    >
      <div
        style={{
          color: colors.dark['500'],
          fontSize: fontSizes.large['700']
        }}
      >
        The three most common chemichal elements of the universe
      </div>
      {console.log(this.props.classes.circleNotch)}
      <div style={{ marginTop: '32px' }}>
        <FontAwesomeIcon
          className={this.props.classes.circleNotch}
          icon='circle-notch'
        />
      </div>
    </div>
  )
}

export default injectSheet(styles)(Home)
