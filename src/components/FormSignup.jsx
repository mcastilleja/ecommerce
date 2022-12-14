import useForm from '@/hooks/useForm'
import { registerUserService } from '@/services/useServices'
import { useNavigate } from 'react-router-dom'
import './formlogin.scss'
import coppelLogo from '../assets/img/logo_coppel.png'

const FormSignup = () => {
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
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-12 login-form-2'>
          <img src={coppelLogo} className='logo' alt='Coppel' />
          <h3>Please sign up</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group m-1'>
              <input
                type='text'
                className='form-control'
                id='first_name'
                placeholder='Elias'
                name='first_name'
                value={input.first_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <input
                type='text'
                className='form-control'
                id='last_name'
                placeholder='Shuchleib'
                name='last_name'
                value={input.last_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
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
            </div>

            <div className='form-group m-1'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='jhon@doe.com'
                name='email'
                value={input.email}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                name='password'
                value={input.password}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group m-1'>
              <button className='btnSubmit' type='submit'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSignup
