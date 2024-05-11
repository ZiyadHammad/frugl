import axios from 'axios'
import { loginApi } from '../api/users'

export const loginUser = async (formData) => {
  try {
    const response = await loginApi.post('/login', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const registerUser = async (formData) => {
  try {
    const response = await loginApi.post('/register', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const getUser = async (formData) => {
  try {
    const response = await loginApi.post('/profile', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const logoutUser = async (formData) => {
  try {
    const response = await loginApi.post('/logout', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}