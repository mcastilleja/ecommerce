import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
  const [product, setProduct] = useState([])
  const { pid } = useParams()

  useEffect(() => {
    getProduct(pid)
  }, [pid])

  const getProduct = async (name) => {
    try {
      const response = await fetch(`https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item/${name}`)

      if (!response.ok) {
        console.log('El API no responde')
      }
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='producto'>
        <img src={product.image} alt={product.product_name} />
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
      </div>
    </>
  )
}

export default DetailProduct
