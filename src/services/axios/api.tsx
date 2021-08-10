import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/finance'
})

export default api
