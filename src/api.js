// src/api.js
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';
export const api = {
  get: (path) => axios.get(`${BASE_URL}${path}`).then(r => r.data),
  post: (path, body) => axios.post(`${BASE_URL}${path}`, body).then(r => r.data),
};
