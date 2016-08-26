import React, { Component } from 'react'
import { Link } from 'react-router'
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
    let logoStyle = { }
    switch (pkg.keyword) {
      case 'react':
        logoStyle = { backgroundImage: `url('http://i.imgur.com/x9MDULe.jpg')` }
        break;
      case 'css':
        logoStyle = { backgroundImage: `url('http://i.imgur.com/VIU31i9.jpg')` }
        break;
      case 'deku':
        logoStyle = { backgroundImage: `url('http://i.imgur.com/2VgF4Ut.jpg')` }
        break;
      default:
    }

    return (
      <div styleName='Card'>
        <div styleName='Inner'>
          <Link to={`/pkg/${pkg.name}`}>
            <div styleName='Pkg' ref='pkg' style={{ top: this.state.top }}>
              <div styleName='Title'>{ pkg.name }</div>
              <p><strong>{pkg.description}</strong></p>
              <div styleName='Logo' style={logoStyle} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
