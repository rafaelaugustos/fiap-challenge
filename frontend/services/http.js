import Axios from "axios"

const service =Axios.create({
  baseURL: "http://localhost:3000"
})

export default service