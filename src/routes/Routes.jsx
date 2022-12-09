import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from '@/pages/Error404'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import DetailProduct from '@/pages/DetailProduct'
import Signup from '@/pages/Signup'
import MyPage from '@/pages/MyPage'
import { AuthContext } from '@/context/AuthContext'

function RoutesIndex () {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:pid' element={<DetailProduct />} />
      <Route path='/myhomepage' element={isAuth ? <MyPage /> : <Navigate to='/login' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
