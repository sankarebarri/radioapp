// api.js
import axios from "axios";
import { getAccessToken } from "../utils/token";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    // console.log("Current Access Token:", token); // Confirm token presence
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // console.log("Authorization Header:", config.headers["Authorization"]); // Log Authorization header
    }
    // console.log("Request URL:", config.baseURL + config.url); // Log full request URL
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
