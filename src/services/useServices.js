import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'

const productList = () => axios.get(`${BASE_URL}/item`)
const detailProduct = (productId) => axios.get(`${BASE_URL}/item/${productId}`)
const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export { productList, detailProduct, registerUserService, loginUserService }
