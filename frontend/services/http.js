import axios from 'axios'

const service = axios.create({
  baseURL: 'http://159.203.114.77:3000/',
})

export default service
