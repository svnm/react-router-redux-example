import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

module.exports = function Header() {
  return (
    <header>
      <div className={styles.header}>

        <Link to="/">Home </Link>
        <Link to="/packages">Packages </Link>

        <div className={styles.wrapper}>
          <div className={styles.react}>
            <div className={styles.inner}></div>
            <div className={styles.innerdot}></div>
          </div>
        </div>

        <p className={styles.description}>
          Search for any react components on npm... 
          make sure you include the 
          <code className={styles.dark}>react-component</code>
          keyword in your 
          <code className={styles.light}>package.json</code>
        </p>

      </div>
    </header>
  )
}
