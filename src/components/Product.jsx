
function Product ({ product }) {
  console.log('Product: ' + product)
  return (
    <div className='card mb-4 box-shadow'>
      {product.image === undefined ? <img src='https://www.ideasmerchandising.com/assets/frontend/imagenes/no_img_avaliable.jpg' alt={product.product_name} /> : <img src={product.image} alt={product.product_name} />}
      <div className='card-body'>
        <p className='card-text'>{product.product_name}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
          </div>
          <small className='text-muted'>9 mins</small>
        </div>
      </div>
    </div>
  )
}

export default Product
