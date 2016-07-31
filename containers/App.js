import React, { Component } from 'react'
import { connect } from 'react-redux'
import { init, toggleMenu } from '../actions'
import CSSModules from 'react-css-modules'
import SiteSidebar from '../components/SiteSidebar'
import styles from './App.css'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      init: () => dispatch(init())
    }
  }
}

@connect(null, mapDispatchToProps)
@CSSModules(styles)
export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { actions } = this.props
    actions.init()
  }

  render() {
    return (
      <div styleName='AppContainer'>
        <SiteSidebar />
        <div styleName='Main'>{this.props.children}</div>
      </div>
    )
  }
}
