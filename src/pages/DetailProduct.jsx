import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { detailProduct } from '../services/useServices'

const DetailProduct = () => {
  const [product, setProduct] = useState([])
  const { pid } = useParams()

  useEffect(() => {
    getProduct(pid)
  }, [pid])

  const getProduct = async (productId) => {
    try {
      const response = await detailProduct(productId)

      if (response.status !== 200) {
        console.log('El API no responde')
      }

      setProduct(structuredClone(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='producto'>
        {product.image === undefined ? <img src='https://www.ideasmerchandising.com/assets/frontend/imagenes/no_img_avaliable.jpg' alt={product.product_name} /> : <img src={product.image} alt={product.product_name} />}
        <h3>{product.product_name}</h3>
        <p>{product.description}</p>
        <div className='product__price'>
          $ {product.price}.00
        </div>
        <div className='product__brand'>
          {product.brand}
        </div>
        <div className='product__category'>
          {product.category}
        </div>
        <button className='product__buyBotton'>Buy</button>
      </div>
    </>
  )
}

export default DetailProduct
