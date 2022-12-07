import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { productList } from '../services/useServices'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getProduct()
    setLoading(false)
  }, [])

  const getProduct = async () => {
    try {
      const response = await productList()

      if (response.status !== 200) {
        console.log('El API no responde')
      }

      setProducts(structuredClone(response.data))
    } catch (error) {
      console.log('Ocurrio un Error: ', error.message)
    }
  }

  return (
    <>
      {loading
        ? <h1>Cargando...</h1>
        : products.map((product, index) => {
          return (
            <div key={index} onClick={() => { navigate(`/product/${product._id}`) }}>
              {product.image === undefined ? <img src='https://www.ideasmerchandising.com/assets/frontend/imagenes/no_img_avaliable.jpg' alt={product.product_name} /> : <img src={product.image} alt={product.product_name} />}
              <h3>{product.product_name}</h3>
              <p>{product.description}</p>
              <div className='product__price'>
                $ {product.price}.00
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Home
