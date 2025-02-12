import axios from 'axios';

const API = axios.create({
  baseURL: 'https://updated-inventory.onrender.com',
  withCredentials: true, // Ensures cookies/session handling
});

export default API;
