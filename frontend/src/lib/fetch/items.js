import { getItemsApi, getItemByIdApi, updateItemApi, deleteItemApi, createItemApi } from '../api/items'

export const getItems = async (formData) => {
  try {
    const response = await getItemsApi.post('/login', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const getItemById = async (formData) => {
  try {
    const response = await getItemByIdApi.post('/register', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const updateItem = async (formData) => {
  try {
    const response = await updateItemApi.post('/profile', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const deleteItem = async (formData) => {
  try {
    const response = await deleteItemApi.post('/logout', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}

export const createItem = async (formData) => {
  try {
    const response = await createItemApi.post('/logout', formData)
    console.log(response)
    return response
  } catch (error) {
    throw new Error('Invalid Credentials')
  }
}