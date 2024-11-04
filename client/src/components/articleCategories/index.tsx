import React from 'react';
import styles from './ArticleCategories.module.css';
import {ArticleCategoriesProps} from "./ArticleCategories.types"
import ArticleCategoriesBurgerMenu from "./ArticleCategoriesBurgerMenu"

const ArticleCategories: React.FC<ArticleCategoriesProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className={styles.articleCategories}>
      <div className={styles.newsContainer}>
        NEWS
      </div>

      <div className={styles.container}>
        <div className={styles.desktopCategories}>
          {categories.map((category, index) => (
            <span key={category.id} >
              <button onClick={() => onCategorySelect(category.id)} className={styles.categoryButton}>
                {category.title}
                {index != categories.length -1 ? <span className={styles.separator}>|</span>: ""}
              </button>
            </span>
          ))}
        </div>
        <div className={styles.mobileCategories}>
          <ArticleCategoriesBurgerMenu categories={categories} onCategorySelect={onCategorySelect} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCategories;
