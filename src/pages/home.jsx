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
  },
  cardBack: {
    color: colors.orange['500'],
    fontSize: fontSizes.large['700']
  },
  separatingBar: {
    width: '200px',
    height: '3px',
    margin: '-16px 0 16px',
    backgroundColor: colors.flashcards.bgDark,
    borderRadius: '4px'
  }
}

class Home extends React.Component {
  state = {
    cardFront: 'The three most common chemichal elements of the universe',
    cardBack: null
  }

  showCardBack = () => {
    this.setState({ cardBack: 'Hydrogen, Helium and Lithium' })
  }

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
        {this.state.cardFront}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '32px'
        }}
      >
        {!this.state.cardBack && (
          <FontAwesomeIcon
            className={this.props.classes.circleNotch}
            onClick={this.showCardBack}
            icon='circle-notch'
          />
        )}
        {this.state.cardBack && (
          <React.Fragment>
            <div className={this.props.classes.separatingBar} />
            <span className={this.props.classes.cardBack}>
              {this.state.cardBack}
            </span>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default injectSheet(styles)(Home)
