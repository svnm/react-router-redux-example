import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pkgSelector } from '../selectors'
import PkgDetails from '../components/PkgDetails'
import { fetchPkg } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchPkg: (name) => dispatch(fetchPkg(name)),
    }
  }
}

@connect(pkgSelector, mapDispatchToProps)
export default class Pkg extends Component {

  componentDidMount() {
    const { actions, params } = this.props
    actions.fetchPkg(params.name)
  }

  render() {
    const { entity, fetching } = this.props

    return (
      <div className='List'>
        <div className='Row'>
        <PkgDetails pkg={entity} />
        </div>
      </div>
    )
  }
}
