import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Menu.css'

@CSSModules(styles)
export default class PkgCard extends Component {

  renderOpen() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24.07" viewBox="0 0 34 24.07">
        <g fill="currentColor"><rect width="34" height="2.5"></rect>
          <rect y="10.79" width="34" height="2.5"></rect>
          <rect y="21.57" width="34" height="2.5"></rect>
        </g>
      </svg>
    )
  }

  renderClose() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="25.81" height="25.81" viewBox="0 0 25.81 25.81">
        <rect x="11.65" y="-4.1" width="2.5" height="34" transform="translate(-5.35 12.9) rotate(-45)"></rect>
        <rect x="-4.1" y="11.65" width="34" height="2.5" transform="translate(-5.35 12.9) rotate(-45)"></rect>
      </svg>
    )
  }

  render() {
    const { open } = this.props
    return (
      <div styleName='Menu' onClick={this.props.toggleMenu.bind(this)}>
        { open ? this.renderOpen() : this.renderClose() }
      </div>
    );
  }
}
