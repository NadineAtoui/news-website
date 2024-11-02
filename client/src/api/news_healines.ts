import axios from 'axios';
import { NewsApiResponse } from '../types'


// TODO remove local host
const API_URL = 'http://localhost:3000/api/headlines';

export const fetchNewsHeadlines = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(API_URL);
    console.log("===========");
    console.log("response ", response.data);
    console.log("===========");

    return response.data; 
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

