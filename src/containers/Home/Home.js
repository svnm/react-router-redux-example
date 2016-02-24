import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPackages } from '../../actions/npmPackages'
import styles from './Home.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'

function Home({ npmPackages, fetchPackages }) {

  let packagesList = null 
  let loader = <Loader />

  if( isEmpty(npmPackages) ) {

    if (typeof window === 'undefined') {
    } else {
      fetchPackages()
    }

  } else {

    /* npm packages have loaded... */
    loader = null

    packagesList = (
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

      <div className={styles.row}>
        <h3 className={styles.title}>Select your react package...</h3>
      </div>

      { loader }
      <div className={styles.list}>
        <ul>      
          { packagesList }
        </ul>
      </div>

    </div>
  )
}

export default connect(
  state => ({ npmPackages: state.npmPackages.packages }),
  { fetchPackages }
)(Home)
