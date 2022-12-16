import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { getRegisterUser } from '@/services/useServices'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)

  const register = (token) => {
    const decode = jwtDecode(token)
    setUser(decode)
    setIsAuth(true)
  }

  const login = (token) => {
    window.localStorage.setItem('token', token)
    register(token)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser(null)
    setIsAuth(false)
    setIsAdmin(false)
  }

  const getUserData = async (id) => {
    try {
      const response = await getRegisterUser(id)
      if (response.status === 200) {
        setUserData(response.data)
      }
    } catch (error) {
      console.log('Un error al obtener el usuario:', error.message)
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      register(token)
    }
  }, [])

  useEffect(() => {
    if (user) {
      if (user.role === 'ADMIN') {
        setIsAdmin(true)
      }
      getUserData(user.id)
    }
  }, [user])

  const values = {
    isAuth,
    user,
    login,
    logout,
    userData,
    isAdmin
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
