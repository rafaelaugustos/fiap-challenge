import service from "./http"

export const Login = payload => service.post("auth/signin", payload)
export const Register = payload => service.post("auth/signup", payload)
export const Places = payload => service.get(`places/=${payload}`)