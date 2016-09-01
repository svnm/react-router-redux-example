import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './SiteSidebar.css'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { windowUndefined } from '../lib/window'
import Menu from './Menu'

@CSSModules(styles, { allowMultiple: true })
export default class SiteSidebar extends Component {

  constructor(props) {
    super(props)
    this.state = { open: true }
  }

  toggleMenu() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { fetching } = this.props
    const { open } = this.state
    const links = [
      { to: '/packages/react', text: 'React Components' },
      { to: '/packages/deku', text: 'Deku Components' },
      { to: '/packages/css', text: 'CSS Modules' }
    ]

    return (
      <div styleName='SiteSidebar' className={open ? 'Open' : ''}>
        <Link styleName='Label' to='/'>Componentzzz</Link>
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
        <Menu toggleMenu={this.toggleMenu.bind(this)} open={open} />
      </div>
    )
  }
}
