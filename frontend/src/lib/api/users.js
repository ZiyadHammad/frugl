import axios from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL;

export const usersAPI = axios.create({
  baseURL: `${serverURL}/api/users`,
  withCredentials: true // Allow credentials (cookies)
});