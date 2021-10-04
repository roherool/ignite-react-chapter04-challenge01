import axios from 'axios';

export const api_unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
})