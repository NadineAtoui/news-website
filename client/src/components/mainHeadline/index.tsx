

import React from 'react'
import styles from './MainHeadline.module.css'


interface MainHeadlineProps {
  article: {
    articleUrl: string;
    title: string;
    description: string;
    source: string;
    publishDate: string;
    imageUrl: string;
  }
}

const MainHeadline: React.FC<MainHeadlineProps> = ({article}) => {
  const {articleUrl, title, source, publishDate, imageUrl, description} = article

  return (
    <a href={articleUrl} className={styles.headline} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl ?? "/assets/image-placeholder.jpeg"} 
        className={styles.image}
        alt={title} />

      <div className={styles.container}>
        <div>
          <div className={styles.sourceContainer}>
            <span className={styles.source}> { source } </span>
            <span className={styles.separator}>
              &nbsp;/&nbsp;
            </span>
            <span className={styles.publishDate}> { publishDate } </span>
          </div>
          <div className={styles.title}> { title } </div>
          <div className={styles.description}> { description } </div>
        </div>
      </div>
    </a>
  )
}

export default MainHeadline
