import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL

export const registerApi = axios.create({
  baseURL: `${baseUrl}/api/users`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds
});

export const loginApi = axios.create({
  baseURL: `${baseUrl}/api/users`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})

export const getUserApi = axios.create({
  baseURL: `${baseUrl}/api/users`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})

export const logoutApi = axios.create({
  baseURL: `${baseUrl}/api/users`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  timeout: 10000 // 10 seconds
})