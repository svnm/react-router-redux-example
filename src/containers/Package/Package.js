import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchPackage } from '../../actions/npmPackage'
import styles from './Package.css'
import Loader from '../../components/Loader/Loader'
import PackageItem from '../../components/PackageItem/PackageItem'
import { isEmpty } from '../../utils'

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

    const { npmPackage } = this.props
    let packageItem = null
    let loader = <Loader />

    if( isEmpty(npmPackage) ){
      /* npm package not loaded yet... */

    } else {
      /* npm package has loaded... */
      loader = null
      packageItem = <PackageItem item={npmPackage} />
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
    npmPackage: state.npmPackage
  }
}

export default connect(mapStateToProps)(Package)
