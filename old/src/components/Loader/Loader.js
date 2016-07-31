import React from 'react'
import styles from './Loader.css'

function Loader() {
  return (
  	<div className={styles.loader}>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    	<span className={styles.block}></span>
    </div>
  )
}

export default Loader
