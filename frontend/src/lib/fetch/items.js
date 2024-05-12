import { itemsAPI } from "../api/items";

export const getItems = async() => {
  try {
    const response = await itemsAPI.get("/");
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(`Unable to fetch items: ${error.message}`);
  }
};

export const getItemById = async (id) => {
  try {
    const response = await itemsAPI.post(`/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(`Unable able to fetch Item id:${id} - ${error.message}`);
  }
};

export const updateItem = async (id) => {
  try {
    const response = await itemsAPI.post(`/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(`Unable able to update Item id:${id} - ${error.message}`);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await itemsAPI.post(`/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(`Unable able to delete Item id:${id} - ${error.message}`);
  }
};

export const createItem = async () => {
  try {
    const response = await itemsAPI.post("/new");
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("Invalid Credentials");
  }
};