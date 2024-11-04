export interface ArticleCategoriesProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
}

export interface Category {
  title: string;
  id: string;
}