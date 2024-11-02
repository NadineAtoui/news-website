import React from 'react';
import styles from './LandingPage.module.css';
import { LandingPageProps } from './LandingPage.types'; 
import NewsHeadlines from '../../components/newsHeadlines'
import useFetchApi from 'hooks/useFetchApi';
import { fetchNewsHeadlines } from '../../api/news_healines';
import { NewsApiResponse } from '../../types'
import {newsHeadlines} from '../../content'

const LandingPage: React.FC<LandingPageProps> = () => {

  const headlines = useFetchApi<NewsApiResponse>(fetchNewsHeadlines);

  // TODO present loading and error in encapsulated components
  if (headlines.loading) return <div>Loading...</div>;
  if (headlines.error) return <div>Error: {headlines.error}</div>;

  const headlinesContent = headlines.data?.articles || [];
  
  return (
    <div className={styles.container}>
      <NewsHeadlines title={newsHeadlines.title} headlines={headlinesContent} buttonTitle={newsHeadlines.buttonTitle}/>
    </div>
  );
};

export default LandingPage;
