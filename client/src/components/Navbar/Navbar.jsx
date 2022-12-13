import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './styles.css'
 
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
      <Link className='link' to="/">
        <div className='logo'>
          <h1>LaBuena</h1>
        </div>
      </Link>

      <div className={isMobile ? 'links-mobile' : 'links'} >
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/labuenacafe/menus">Menu</Link>
        <Link className='link' to="/labuenacafe/contact">About</Link>
        <Link className='link' to="/labuenacafe/location">Location</Link>
        {
          user?.result.role === 'admin' && (
            <Link className='link' to="/labuenacafe/admin">Admin</Link>
          )
        }

        {user?.result ? (
          <div className='user'>
            <p>{user?.result.name}</p>
            <button onClick={logout}>Logout</button> 
          </div>
        ) : (
          <Link to="/labuenacafe/auth">
            <a className='link'>Sign In</a>
          </Link>
        )}

      </div>

      <div>
        

      <div className='humberger'>
        <RiMenu5Line size='30px' onClick={() => setIsMobile(!isMobile)} />
      </div>

      </div>
    </div>
  )
}

export default Navbar;

