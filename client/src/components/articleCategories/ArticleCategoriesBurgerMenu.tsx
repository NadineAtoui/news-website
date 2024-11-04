import React, { useState } from 'react';
import styles from './ArticleCategoriesBurgerMenu.module.css';
import {ArticleCategoriesProps} from "./ArticleCategories.types"

const ArticleCategoriesBurgerMenu: React.FC<ArticleCategoriesProps> = ({ categories, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerIcon} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {categories.map(category => (
            <button key={category.id} onClick={() => onCategorySelect(category.id)} className={styles.categoruButton}>
              {category.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleCategoriesBurgerMenu;
