import React from 'react'
import styles from './Package.css'
import marked from 'marked'

module.exports = function (props) {

    const { name, repoLink, author, readme } = props.item

    let authorName = null
    if(author !== undefined){
      if(author.name !== undefined){
        authorName = author.name
      }
    }

    return (
      <div className={styles.item}>
        { 
          name && repoLink &&
            <a target='_blank' className={styles.link} href={repoLink}>
              <h2 className={styles.name}>{name} </h2>
            </a>
        }
 
        { 
          authorName &&
            <h2 className={styles.authorName}>by {authorName} </h2>        
        }
        
        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: readme }} />
        }

      </div>

    );
}
