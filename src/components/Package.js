import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { fetchPackage } from '../actions/packages'

class Package extends Component {

  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount() {
    console.log(this.props.params.userId)
  }

  fetch () {
    this.props.dispatch(fetchPackage('deku-css-modules'))
  }

  render () {

    let userComponent = null

    const { npmPackages, selectedPackage } = this.props

    if(selectedPackage !== undefined){
      userComponent = ( <h2>{selectedPackage.name}</h2> )
    }

    return (
      <div>
        <h2>Package</h2>
        {userComponent}

        <button onClick={this.fetch}>
          Fetch deku-css-modules
        </button>
      </div>
    )
  }

}


function mapStateToProps(state) {
  console.log(state)
  return { 
    selectedPackage: state.packages.selectedPackage, 
    npmPackages: state.packages.npmPackages 
  }
}

export default connect(mapStateToProps)(Package)
