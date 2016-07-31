import React from 'react'
import styles from './PackageItem.css'
import marked from 'marked'

function PackageItem(props) {

    const { name, author, readme } = props.item

    let authorName = null
    if(author !== undefined){
      if(author.name !== undefined){
        authorName = author.name
      }
    }

    return (
      <div className={styles.item}>
        { 
          name &&
            <h2 className={styles.name}>{name} </h2>
        }
 
        { 
          authorName &&
            <h2 className={styles.authorName}>by {authorName} </h2>        
        }
        
        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: marked(readme) }} />
        }

      </div>

    );
}

export default PackageItem