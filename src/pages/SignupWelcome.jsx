import { useLocation, Link } from 'react-router-dom'

const SignupWelcome = () => {
  const location = useLocation()
  return (
    <>
      <div className='newUser'>
        <div className='newUser__welcome'>
          Welcome {location.state.firstName} {location.state.lastName}
        </div>
        <div className='newUser__goTo'>
          Congratulations!! you can <Link to='/login'>Login</Link>
        </div>
      </div>
    </>
  )
}

export default SignupWelcome
