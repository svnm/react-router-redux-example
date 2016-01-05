import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

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
)(App);
