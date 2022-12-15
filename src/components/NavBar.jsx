import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './navbar.scss'
import coppelLogo from '../assets/img/logo_coppel.png'

const NavBar = () => {
  const { isAuth, logout, userData } = useContext(AuthContext)
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'><img src={coppelLogo} className='logo' alt='Coppel' /></Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/'>Home</Link>
        </li>
        {
          !isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <Link to='/login'>Login</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/signup'>Signup</Link>
                </li>
              </>
              )
            : (
              <>
                <li className='header__list-item'>
                  <Link to='/myhomepage' className='header__item-link'>My HomePage</Link>
                </li>
                <li className='header__list-item'>
                  <span>Bienvenido {userData.first_name}, {userData.last_name}</span>
                </li>
                <li className='header__list-item'>
                  <Link to='/' className='header__item-link' onClick={logout}>Logout</Link>
                </li>
              </>
              )
        }
      </ul>
    </nav>
  )
}

export default NavBar
