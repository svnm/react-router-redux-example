import React from 'react'
import loader from 'css-block-loader'
let styles = {}
Object.assign(styles, loader)

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
