import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchPackage } from '../actions/packages'
import Loader from '../components/Loader'
import PackageItem from '../components/PackageItem'
import styles from './Package.css'

class Package extends Component {

  constructor (props) {
    super(props)
    this.fetchPackage = this.fetchPackage.bind(this)
  }

  componentDidMount () {
    /* fetch the npm package */
    this.fetchPackage(this.props.params.name)
  }

  fetchPackage (name) {
    this.props.dispatch(fetchPackage(name))    
  }

  render () {

    const { npmPackages, selectedPackage } = this.props
    let packageItem = null
    let loader = <Loader />

    if(selectedPackage === undefined || !Object.keys(selectedPackage).length ){
      /* npm package not loaded yet... */

    } else {
      /* npm package has loaded... */
      loader = null
      packageItem = <PackageItem item={selectedPackage} />
    }

    return (
      <div className={styles.package}>
        { loader }
        { packageItem }
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
