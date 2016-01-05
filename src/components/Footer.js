import React from 'react'
import styles from './Footer.css'

module.exports = function Footer() {
  return (
  	<div className={styles.footer}>
      <div className={styles.group}>
        <span>made with </span>
        <span className={styles.icon}>
          <i className='fa fa-1x fa-heart' />
        </span>
      </div>
    </div>
  )
}
