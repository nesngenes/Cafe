import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './navbar.css'
import { images } from '../../constants';

import { RiMenu5Line } from "react-icons/ri";


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);

  const logout = () => {
    dispatch({type: 'LOGOUT'})

    navigate('/')

    setUser(null)
  }

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location])

  return (
    <div className='navbar'>
      <Link className='nav-logo' to="/">
        <div>
          <h1><span className='green'>La</span>Buena</h1>
        </div>
      </Link>

      <div className='nav-content'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/labuenacafe/menus">Menu</Link>
        <Link className='nav-link' to="/labuenacafe/about-us">About</Link>
        <Link className='nav-link' to="/labuenacafe/contact">Contact</Link>
        {
          user?.result.role === 'admin' && (
            <Link className='nav-link' to="/labuenacafe/admin">Admin</Link>
            )
          }

      
        {user?.result ? (
          <div className='user'>
            <p>{user?.result.name}</p>
            <button onClick={logout}>Logout</button> 
          </div>
        ) : (
          <Link className='nav-link' to="/labuenacafe/auth">
            <a>Sign In / Up</a>
          </Link>
        )}

      </div>
        <div className='cafe-location'>
          <img src={images.cafe} alt='cafe-branch' className='cafe-location-logo'/>
          <Link className='nav-link' to="/labuenacafe/location">Cafe Branch</Link>
        </div>
    </div>
  )
}

export default Navbar;

