import { useContext } from 'react'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/useServices'
import { AuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
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
    <div>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

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

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Log in</button>
        </form>
      </main>
    </div>
  )
}

export default Login
