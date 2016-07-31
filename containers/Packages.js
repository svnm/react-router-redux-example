import React, { Component } from 'react'
import { connect } from 'react-redux'
import { packagesSelector } from '../selectors'
import PkgCard from '../components/PkgCard'

@connect(packagesSelector)
export default class Packages extends Component {

  render() {
    const { entities, fetching } = this.props

    return (
      <div className='List'>
        <div className='Row'>
        {
          entities.length <= 0 ?  <span>loading...</span> :
            entities.map( (e, i) => (
              <PkgCard key={`pkg_${e.id}`} pkg={e} />
            ))
        }
        </div>
      </div>
    )
  }
}
