import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
