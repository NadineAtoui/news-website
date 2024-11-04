import axios from 'axios';
import { NewsApiResponse } from '../types'

const API_URL = `${process.env.REACT_APP_API_HOST}/api/headlines`;

export const fetchNewsHeadlines = async (category: string = 'general'): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${API_URL}?category=${category}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
