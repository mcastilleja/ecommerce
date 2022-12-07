import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
