import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import NewsHeadlines from '../../components/newsHeadlines'
import useFetchApi from '../../hooks/useFetchApi';
import { fetchNewsHeadlines } from '../../api/news_healines';
import { NewsApiResponse } from '../../types'
import { formatDate } from '../../helpers';
import MainHeadline from '../../components/mainHeadline'
import Error from '../../components/error';
import { error, categories, landingPage, noNews } from "../../content"
import Loader from '../../components/loader';
import ArticleCategories from '../../components/articleCategories'
import NoNews from '../../components/noNews';

const LandingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    () => localStorage.getItem("selectedCategory") || "general"
  );

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const headlines = useFetchApi<NewsApiResponse, string>(fetchNewsHeadlines, selectedCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Choose only articles that have images & description and format their date
  const filterAndFormatArticles = (articles: NewsApiResponse['articles'] = []) => 
    articles
      .filter(article => article.urlToImage && article.description) 
      .map(article => ({
        ...article,
        publishedAt: formatDate(article.publishedAt)
      }));
      
  const articlesWithImagesAndDescription = filterAndFormatArticles(headlines.data?.articles);
  const mainArticle = articlesWithImagesAndDescription[0];

  return (
    <>
      <div className={styles.container}>
        <ArticleCategories categories={categories} onCategorySelect={handleCategorySelect} />

        { headlines.loading?
          <Loader />
          : 
          ( headlines.error ?
            <Error errorMessage={error.errorMessage} buttonTitle={error.buttonTitle} onClick={headlines.retry}/>
            :
            (articlesWithImagesAndDescription.length > 0?
              <div className={styles.headlines}>
                <div className={styles.headlinesListContainer}>
                  <h2>{landingPage.NewsHeadlinesTitle}</h2>
                  <NewsHeadlines articlesWithImage={articlesWithImagesAndDescription.slice(1)}/>
                </div>
                
                <div className={styles.mainHeadlineContainer}>
                  <MainHeadline
                    article={{
                      articleUrl: mainArticle.url,
                      title: mainArticle.title,
                      description: mainArticle.description!,
                      source: mainArticle.source.name,
                      publishDate: mainArticle.publishedAt,
                      imageUrl: mainArticle.urlToImage!,
                    }}
                  />
                </div>
              </div>
              : 
              <NoNews content={noNews}/>
            )
          )
        }
      </div>
    </>
  );
};

export default LandingPage;
