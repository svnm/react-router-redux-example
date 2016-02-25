import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../../actions/npmPackages'
import styles from './Home.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'
import { Link } from 'react-router'

class Home extends Component {

  static fetchData({ params, store, url }) {
    return store.dispatch( fetchPackages(url) )
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.dispatch(fetchPackages(location.origin))
  }

  render () {

    const { npmPackages } = this.props
    let loader = <Loader />
    let packages = null

    if( isEmpty(npmPackages) ){
      /* npm packages not loaded yet... */
    } else {
      loader = null

      packages = (
        npmPackages.map(function (p) { 
          return (
            <li key={p.id}>
              <Link to={`/package/${p.id}/${p.name}`}>
                <p className={styles.name}>{p.name}</p>
              </Link>
            </li>
          )
        })
      )
    }

    return (
      <div className={styles.home}>
        { loader }
        <div className={styles.list}>
          <ul>{ packages }</ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    npmPackages: state.npmPackages.packages
  }
}

export default connect(mapStateToProps)(Home)
