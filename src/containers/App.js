import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

/* generic styles */
import styles from '../styles/base.css'
import normalize from '../styles/normalize.css'
Object.assign(styles, normalize)


function App({ pushPath, children }) {
  return (
    <div>

      <Header />

      <main>      
        {children}
      </main>

      <Footer />

    </div>

  );
};

module.exports = connect(
  null
)(App)
