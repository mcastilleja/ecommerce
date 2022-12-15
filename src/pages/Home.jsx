import { useState, useEffect } from 'react'
import { productService } from '@/services/useServices'
import ListProducts from '@/components/ListProducts'
import Product from '@/components/Product'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct()
    setLoading(false)
  }, [])

  const getProduct = async () => {
    try {
      const response = await productService('')

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
      <div className='row'>
        {loading
          ? <h1>Cargando...</h1>
          : products.map((product, index) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <ListProducts>
                <Product key={index} product={product} />
              </ListProducts>
            )
          })}
      </div>
    </>
  )
}

export default Home
