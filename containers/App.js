import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../actions'
import CSSModules from 'react-css-modules'
import SiteSidebar from '../components/SiteSidebar'
import styles from './App.css'
import { getSiteUrl } from '../lib/site'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchPackages: (keyword) => dispatch(fetchPackages(getSiteUrl(), keyword)),
    }
  }
}

@connect(null, mapDispatchToProps)
@CSSModules(styles)
export default class App extends Component {

  static fetchData({ params, store, url }) {
    return store.dispatch( fetchPackages(url, params.keyword) )
  }

  componentDidMount() {
    const { actions, params } = this.props
    actions.fetchPackages(params.keyword)
  }

  componentWillReceiveProps (nextProps) {
    const { params } = nextProps
    const { actions } = this.props
    actions.fetchPackages(params.keyword)
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
