import { NewsHeadlinesApi } from '../../types';

interface NewsHeadlinesProps {
  title: string;
  headlines: NewsHeadlinesApi[];
  buttonTitle: string;
}

const NewsHeadlines: React.FC<NewsHeadlinesProps> = ({title, buttonTitle, headlines}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {headlines.map((headline, index) => (
          <li key={`${headline.source.id}-${index}`}>
            <h2>{headline.title}</h2>
            <p>{headline.description}</p>
            <a href={headline.url} target="_blank" rel="noopener noreferrer">
              {buttonTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHeadlines;
