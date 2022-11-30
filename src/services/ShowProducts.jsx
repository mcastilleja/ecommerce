import { useState, useEffect } from 'react'

const ShowProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    try {
      const response = await fetch('https://ecomerce-master.herokuapp.com/api/v1/item')

      if (!response.ok) {
        console.log('El API no responde')
      }

      const data = await response.json()
      setProducts([...data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      {products.map((product, index) => {
        return (
          <div key={index} className={product._id}>
            {product.image === undefined ? <img src='https://www.ideasmerchandising.com/assets/frontend/imagenes/no_img_avaliable.jpg' alt={product.product_name} /> : <img src={product.image} alt={product.product_name} />}
            <h3>{product.product_name}</h3>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ShowProducts
