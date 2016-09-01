import React, { Component } from 'react'
import { connect } from 'react-redux'
import { packagesSelector } from '../selectors'
import PkgCard from '../components/PkgCard'
import Loader from '../components/Loader'

@connect(packagesSelector)
export default class Packages extends Component {

  static fetchData({ params, store, url }) {
  }

  render() {
    const { entities, fetching } = this.props

    return (
      <div className='List'>
        <div className='Row'>
        {
          fetching ? <Loader /> :
            entities.map( (e, i) => (
              <PkgCard key={`pkg_${e.id}`} pkg={e} />
            ))
        }
        </div>
      </div>
    )
  }
}
