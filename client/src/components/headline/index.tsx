import React from 'react'
import styles from './Headline.module.css'
import { truncateSentence } from '../../helpers'


interface HeadlineProps {
  articleUrl: string;
  title: string;
  source: string;
  publishDate: string;
  number: number;
  imageUrl: string;
  maxTitleChar: number;
}

const Headline: React.FC<HeadlineProps> = ({articleUrl, title, source, publishDate, number, imageUrl, maxTitleChar}) => {
  const truncated = truncateSentence(title, maxTitleChar);

  return (
    <a href={articleUrl} className={styles.headline} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl ?? "/assets/image-placeholder.jpeg"} 
        className={styles.image}
        alt={truncated} />

      <div className={styles.content}>
        <div className={styles.number}> { number } </div>
        <div>
          <div className={styles.sourceContainer}>
            <span className={styles.source}> { source } </span>
            <span className={styles.separator}>
              &nbsp;/&nbsp;
            </span>
            <span className={styles.publishDate}> { publishDate } </span>
          </div>
          <div className={styles.title}> { truncated } </div>
        </div>
      </div>
    </a>
  )
}

export default Headline
