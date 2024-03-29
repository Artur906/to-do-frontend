import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL
})

export const nextApi = axios.create({
  baseURL: 'http://localhost:3000/api/'
})