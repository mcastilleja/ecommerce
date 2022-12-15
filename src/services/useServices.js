import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'

axios.interceptors.request.use((config) => {
  const user = window.localStorage.getItem('token')

  if (user) {
    config.headers.Authorization = `JWT ${user}`
  }
  return config
},
(error) => {
  return Promise.reject(error)
}
)

const productService = (productId) => axios.get(`${BASE_URL}/item/${productId}`)
const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getRegisterUser = (id) => axios.get(`${BASE_URL}/user/${id}`)
const addNewProductService = (data) => axios.post(`${BASE_URL}/item`, data)

export { productService, registerUserService, loginUserService, getRegisterUser, addNewProductService }
