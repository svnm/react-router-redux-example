import React from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../actions/packages'
import { Link } from 'react-router'
import styles from './Home.css'

function Home({ items, fetchPackages }) {
  
  let packages = null

  if(items !== undefined){
    packages = items
  }

  return (
    <div className={styles.home}>
      <p className={styles.description}>
        <Link to="/packages">React component packages on npm...</Link>
        <br />
          
        include the 
        <code className={styles.dark}>react-component</code>
        keyword in your 
        <code className={styles.light}>package.json</code>
      </p>
    </div>
  );
};

export default connect(
  state => ({})
)(Home);
