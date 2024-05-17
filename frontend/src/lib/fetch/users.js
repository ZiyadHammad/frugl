import { usersAPI } from '../api/users'


export const registerUser = async (formData) => {
  try {
    const response = await usersAPI.post('/register', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const loginUser = async (formData) => {
  try {
    const response = await usersAPI.post('/login', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const logoutUser = async () => {
  try {
    const response = await usersAPI.post('/logout')
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const getUser = async () => {
  try {
    const response = await usersAPI.get('/profile')
    return response.data
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const updateUser = async (formData) => {
  try {
    const response = await usersAPI.put('/profile', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}