export interface NewsHeadlinesApi {
  source: {
    id: string
    name: string
  },
  author: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content?: string
}

export interface NewsApiResponse {
  articles: NewsHeadlinesApi[];
  status: string;
  totalResults: number;
}
