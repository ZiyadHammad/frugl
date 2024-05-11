import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL

export const getItemsApi = axios.create({
  baseURL: `${baseUrl}/api/items`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds
});

export const getItemByIdApi = axios.create({
    baseURL: `${baseUrl}/api/items/:id`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})

export const updateItemApi = axios.create({
  baseURL: `${baseUrl}/api/items/:id`,
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123'
},
timeout: 10000 // 10 seconds
})

export const deleteItemApi = axios.create({
    baseURL: `${baseUrl}/api/items/:id`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})

export const createItemApi = axios.create({
    baseURL: `${baseUrl}/api/items/new`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})