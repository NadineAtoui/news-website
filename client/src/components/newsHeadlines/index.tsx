import { NewsHeadlinesApi } from '../../types';
import Headline from '../../components/headline'
import styles from './NewsHeadlines.module.css'

interface NewsHeadlinesProps {
  articlesWithImage?: NewsHeadlinesApi[];
}

const NewsHeadlines: React.FC<NewsHeadlinesProps> = ({ articlesWithImage}) => {
  return (
    <div className={styles.container}>
      {articlesWithImage && articlesWithImage.map((headline, index) => (
        <div className={styles.headlineContainer} key={`${headline.source.id}-${index}`}>
          <Headline
            articleUrl={headline.url}
            title={headline.title}
            source={headline.source.name}
            publishDate={headline.publishedAt}
            number={index + 1}
            imageUrl={headline.urlToImage!}
            maxTitleChar={50}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsHeadlines;