import axios from 'axios';

const serverURL = import.meta.env.VITE_SERVER_URL

export const itemsAPI = axios.create({
  baseURL: `${serverURL}/api/items`,
  withCredentials: true // Allow credentials (cookies)
});