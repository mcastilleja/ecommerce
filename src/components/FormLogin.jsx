import { useContext } from 'react'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/useServices'
import { AuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './formlogin.scss'
import coppelLogo from '../assets/img/logo_coppel.png'

const FormLogin = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        console.log('el estatus es 200')
        const token = response.data.token
        login(token)
        navigate('/myhomepage')
      }
    } catch (error) {
      console.log('Hay un error en el Login:' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })
  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-12 login-form-2'>
          <img src={coppelLogo} className='logo' alt='Coppel' />
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Your email'
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
                placeholder='Your password'
                name='password'
                value={input.password}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <button className='btnSubmit' type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormLogin
