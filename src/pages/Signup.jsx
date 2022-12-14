import useForm from '@/hooks/useForm'
import { registerUserService } from '@/services/useServices'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)

      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un Error: ', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              placeholder='Elias'
              name='first_name'
              value={input.first_name}
              onChange={handleInputChange}
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              placeholder='Shuchleib'
              name='last_name'
              value={input.last_name}
              onChange={handleInputChange}
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>

          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='jhon@doe.com'
              name='email'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
      </main>
    </>
  )
}

export default Signup
