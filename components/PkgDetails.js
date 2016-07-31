import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './PkgDetails.css'
import { connect } from 'react-redux'

@CSSModules(styles)
export default class PkgDetails extends Component {

  render() {
    const { pkg } = this.props

    return (
      <div styleName='Card'>
        <div styleName='Inner'>
          <div styleName='Details'>
            <div styleName='Title'>{pkg.title}</div>
          </div>
          <div styleName='Hover'>
            <div>
            </div>
            <div styleName='HoverTitle'>
              {pkg.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
