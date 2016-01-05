import React from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../actions/packages'

function Home({ items, fetchPackages }) {
  
  let packages = null

  if(items !== undefined){
    packages = items
  }

  return (
    <div>
      Some react packages:
      {packages}
      <button onClick={() => fetchPackages()}>Fetch some React Packages</button>
    </div>
  );
};

module.exports = connect(
  state => ({ items: state.packages.packages }),
  { fetchPackages }
)(Home);
