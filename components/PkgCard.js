import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './PkgCard.css'

@CSSModules(styles)
export default class PkgCard extends Component {

  constructor(props) {
    super(props)
    this.state = { top: 0 }
  }

  render() {
    const { pkg } = this.props
    const logoStyle = { backgroundImage: `url('http://i.imgur.com/x9MDULe.jpg')` }

    return (
      <div styleName='Card'>
        <div styleName='Inner'>
          <div styleName='Pkg' ref='pkg' style={{ top: this.state.top }}>
            <div styleName='Title'>{ pkg.name }</div>
            <p><strong>{pkg.description}</strong></p>
            <div styleName='Logo' style={logoStyle} />
          </div>
        </div>
      </div>
    );
  }
}
