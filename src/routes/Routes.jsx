import { Routes, Route } from 'react-router-dom'
import Error404 from '@/pages/Error404'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import DetailProduct from '@/pages/DetailProduct'
import Signup from '@/pages/Signup'
import SignupWelcome from '@/pages/SignupWelcome'

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:pid' element={<DetailProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/welcome' element={<SignupWelcome />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
