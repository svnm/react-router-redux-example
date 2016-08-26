import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './SiteSidebar.css'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { windowUndefined } from '../utils/window'

@CSSModules(styles, { allowMultiple: true })
export default class SiteSidebar extends Component {

  render() {
    const { fetching } = this.props
    const links = [
      { to: '/packages/react', text: 'React Components' },
      { to: '/packages/deku', text: 'Deku Components' },
      { to: '/packages/css', text: 'CSS Modules' }
    ]

    return (
      <div styleName='SiteSidebar'>
        <Link styleName='Label' to='/'>Component Search</Link>
        <div>
          {
            links.map( (link, i) => {
              let linkClass = 'Link'
              if(!windowUndefined()){
                linkClass = (window.location.pathname.indexOf(link.to) !== -1) ?
                  'Link ActiveLink' : 'Link'
              }
              return (
                <Link key={i} styleName={linkClass} to={link.to}>
                  <span styleName='LinkText'>{link.text}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}
