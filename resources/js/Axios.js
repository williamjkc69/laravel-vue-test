import axios from 'axios'
const qs = require('qs')

const localUrl = 'http://localhost:8000/api'

const HTTP = axios.create({
  baseURL: localUrl,
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    (data, headers) => {
      if (headers['Content-Type'] == 'multipart/form-data') {
        return data
      }
      return qs.stringify(data)
    },
  ],
})

HTTP.interceptors.request.use((config) => {
  let myToken = localStorage.getItem('token_local')
  if (myToken != null) {
    config.headers.Authorization = `Bearer ${myToken}`
  }
  return config
})

HTTP.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error)
  }
)

export default HTTP
