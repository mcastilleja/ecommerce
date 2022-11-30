import { Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Signup from '../pages/Signup'

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
