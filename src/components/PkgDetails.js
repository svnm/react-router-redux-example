import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './PkgDetails.css'
import { connect } from 'react-redux'
import marked from 'marked'

@CSSModules(styles)
export default class PkgDetails extends Component {

  render() {
    const { pkg } = this.props
    let authorName = null
    if(pkg.author !== undefined){
      if(pkg.author.name !== undefined){ authorName = pkg.author.name }
    }

    return (
      <div styleName='Container'>
        <div styleName='Inner'>
          <div styleName='Details'>
            <h1 styleName='Name'>{pkg.name}</h1>
            <h2 styleName='Author'>{authorName}</h2>
            {
              pkg.readme &&
                <div dangerouslySetInnerHTML={{__html: marked(pkg.readme) }} />
            }
          </div>
        </div>
      </div>
    );
  }
}
