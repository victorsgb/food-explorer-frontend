// Core dependencies
import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://food-explorer-backend.onrender.com'
});