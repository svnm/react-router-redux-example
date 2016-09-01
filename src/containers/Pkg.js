import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pkgSelector } from '../selectors'
import PkgDetails from '../components/PkgDetails'
import { fetchPkg } from '../actions'
import { getSiteUrl } from '../lib/site'
import Loader from '../components/Loader'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchPkg: (name) => dispatch(fetchPkg(getSiteUrl(), name)),
    }
  }
}

@connect(pkgSelector, mapDispatchToProps)
export default class Pkg extends Component {

  static fetchData({ params, store, url }) {
    return store.dispatch( fetchPkg(url, params.name) )
  }

  componentDidMount() {
    const { actions, params } = this.props
    actions.fetchPkg(params.name)
  }

  render() {
    const { entity, fetching } = this.props

    return (
      <div className='List'>
        <div className='Row'>
          { fetching ? <Loader /> : <PkgDetails pkg={entity} /> }
        </div>
      </div>
    )
  }
}
