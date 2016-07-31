import React, { Component, PropTypes } from 'react'
import styles from './Footer.css'

export default class Footer extends Component {

  render () {
    return (
    	<div className={styles.footer}>
    		<span>made with </span>
    		<div className={styles.heart}></div>
    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}
