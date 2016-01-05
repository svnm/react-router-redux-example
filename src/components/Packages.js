import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPackages } from '../actions/packages'

function Packages({ npmPackages, fetchPackages }) {

  let component = null

  if(npmPackages !== undefined){

    component = (

      npmPackages.map(function (p) { 
        return (
          <li key={p.id}>
            <Link to={`/package/${p.id}`}>{p.name}</Link>
          </li>
        )
      })
    )
  }

  return (
    <div>
      <h3>Some react packages:</h3>
      <ul>
      { component }
      </ul>

      

      <button onClick={() => fetchPackages()}>Fetch some React Packages</button>    
    </div>
  );
};

module.exports = connect(
  state => ({ npmPackages: state.packages.npmPackages }),
  { fetchPackages }
)(Packages);
