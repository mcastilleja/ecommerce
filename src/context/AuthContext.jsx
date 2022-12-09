import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)

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
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      register(token)
    }
  }, [])

  const values = {
    isAuth,
    user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
