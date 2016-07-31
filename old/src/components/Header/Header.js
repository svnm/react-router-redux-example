import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

function Header() {
  return (
    <header>
      <Link to="/">
      <div className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.react}>
              <div className={styles.inner}></div>
              <div className={styles.innerdot}></div>
            </div>
        </div>
      </div>
      </Link>
    </header>
  )
}

export default Header