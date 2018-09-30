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
  addCard: {
    fontSize: fontSizes.large['900'],
    color: colors.cherry['500'],
    transition: 'all ease-out 75ms',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all ease-in 75ms',
      transform: 'scale(1.5, 1.5)'
    }
  },
  thumbs: {
    fontSize: fontSizes.large['900'],
    transition: 'all ease-out 100ms',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all ease-in 100ms'
    }
  },
  thumbsUp: {
    color: colors.turquoise['500'],
    '&:hover': {
      transform: 'scale(1.5, 1.5) rotate(-25deg)'
    }
  },
  thumbsDown: {
    color: colors.grape['500'],
    transform: 'scaleX(1)',
    '&:hover': {
      transform: 'scale(1.5, 1.5) rotate(25deg)'
    }
  },
  arrow: {
    fontSize: fontSizes.large['900'],
    color: colors.pastel['700'],
    transition: 'all ease-out 75ms',
    '&:hover': {
      color: colors.pastel['900'],
      transition: 'all ease-in 75ms'
    }
  },
  cardBack: {
    color: colors.orange['500'],
    fontSize: fontSizes.large['700'],
    fontWeight: 500
  },
  separatingBar: {
    width: '200px',
    height: '3px',
    margin: '-16px 0 16px',
    backgroundColor: colors.pastel['600'],
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
        background: colors.pastel['500']
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '39vw',
          height: '6px',
          backgroundColor: colors.cherry['500']
        }}
      />
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '128px',
          top: 0,
          left: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ padding: '4px 8px', cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon='angle-left'
            className={this.props.classes.arrow}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '128px',
          top: 0,
          right: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ padding: '4px 8px', cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon='angle-right'
            className={this.props.classes.arrow}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDiretion: 'column', height: '25vh' }}>
        {this.state.cardBack && (
          <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
            <span style={{ transform: 'scaleX(-1)' }}>
              <FontAwesomeIcon
                className={`${this.props.classes.thumbs} ${
                  this.props.classes.thumbsDown
                }`}
                icon={['far', 'thumbs-down']}
              />
            </span>
            <FontAwesomeIcon
              className={`${this.props.classes.thumbs} ${
                this.props.classes.thumbsUp
              }`}
              style={{ marginLeft: '64px' }}
              icon={['far', 'thumbs-up']}
            />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDiretion: 'column', height: '25vh' }}>
        <div
          style={{
            alignSelf: 'flex-end',
            color: colors.dark['500'],
            fontSize: fontSizes.large['700']
          }}
        >
          {this.state.cardFront}
        </div>
      </div>
      <div style={{ display: 'flex', flexDiretion: 'column', height: '25vh' }}>
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
      <div style={{ display: 'flex', flexDiretion: 'column', height: '25vh' }}>
        <div style={{ alignSelf: 'flex-end', marginBottom: '48px' }}>
          <FontAwesomeIcon
            icon='plus-circle'
            className={this.props.classes.addCard}
            style={{}}
          />
        </div>
      </div>
    </div>
  )
}

export default injectSheet(styles)(Home)
