import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackage } from '../../actions/npmPackage'
import styles from './Package.css'
import Loader from '../../components/Loader/Loader'
import PackageItem from '../../components/PackageItem/PackageItem'
import { isEmpty } from '../../utils'

class Package extends Component {

  static fetchData({ params, store, url }) {
    return store.dispatch( fetchPackage(url, params.name) )
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.setState({
      loading: true
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      loading: !isEmpty(nextProps.params.npmPackage)
    })
  }

  componentDidMount () {
    this.props.dispatch(fetchPackage(location.origin, this.props.params.name))
  }

  render () {

    const { npmPackage } = this.props
    let loading = this.state.loading
    let packageItem = loading ? null : <PackageItem item={npmPackage} />
    let loader = loading ? <Loader /> : null

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
