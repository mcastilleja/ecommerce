import useForm from '@/hooks/useForm'
import { addNewProductService } from '@/services/useServices'

const FormAddProduct = () => {
  const addProduct = async (data) => {
    try {
      const response = await addNewProductService(data)
      if (response.status === 200) {
        console.log('Implementado el producto')
      }
    } catch (error) {
      console.log('Error al publicar un producto:', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(addProduct, {
    isActive: true,
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: '',
    sku: '',
    image: ''
  })

  return (
    <div className='container newproduct-container'>
      <div className='row'>
        <div className='col-md-12 newproduct-container-form'>
          <h3>Add new product</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group m-1'>
              <input
                type='text'
                className='form-control'
                id='product_name'
                placeholder='Product Name'
                name='product_name'
                value={input.product_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <textarea
                type='text'
                className='form-control'
                id='description'
                placeholder='Description'
                name='description'
                value={input.description}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <input
                type='number'
                className='form-control'
                id='price'
                placeholder='Product price'
                name='price'
                value={input.price}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <input
                type='text'
                className='form-control'
                id='brand'
                placeholder='Product Brand'
                name='brand'
                value={input.brand}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <select
                className='form-select'
                id='category'
                name='category'
                value={input.category}
                onChange={handleInputChange}
              >
                <option value=''>Select a Category...</option>
                <option value='Books'>Books</option>
                <option value='Movies'>Movies</option>
                <option value='Music'>Music</option>
                <option value='Games'>Games</option>
                <option value='Electronics'>Electronics</option>
                <option value='Computers'>Computers</option>
                <option value='Home'>Home</option>
                <option value='Garden'>Garden</option>
                <option value='Tools'>Tools</option>
                <option value='Grocery'>Grocery</option>
                <option value='Health'>Health</option>
                <option value='Beauty'>Beauty</option>
                <option value='Toys'>Toys</option>
                <option value='Kids'>Kids</option>
                <option value='Baby'>Baby</option>
                <option value='Clothing'>Clothing</option>
                <option value='Shoes'>Shoes</option>
                <option value='Jewelery'>Jewelery</option>
                <option value='Sports'>Sports</option>
                <option value='Outdoors'>Outdoors</option>
                <option value='Automotive'>Automotive</option>
                <option value='Industrial'>Industrial</option>
              </select>
            </div>

            <div className='form-group m-1'>
              <input
                type='text'
                className='form-control'
                id='sku'
                placeholder='Code SKU'
                name='sku'
                value={input.sku}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <input
                type='url'
                className='form-control'
                id='image'
                placeholder='Product image'
                name='image'
                value={input.image}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <button className='btnSubmit' type='submit'>Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormAddProduct
