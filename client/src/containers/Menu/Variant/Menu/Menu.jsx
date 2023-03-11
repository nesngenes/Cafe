import React, {useState, useEffect} from 'react'
import {deleteMenu} from '../../../../actions/menus'
import {useDispatch} from 'react-redux'
import {useNavigate, useLocation} from 'react-router-dom'

import './styles.css'

const Menu = ({menu, setCurrentId}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location])

  const handleEdit = () => {
    setCurrentId(menu._id)
    navigate('/labuenacafe/admin/add-menu')
  }

  return (
    <div className='eachmenu'>
      <div className='menu-head'>
        <h1 className='menu-name'>{menu.menuName}</h1>
        <p>Rp: {menu.price}</p>
      </div>
        <img className='menuimage' src={menu.selectedFile} />
        <p>{menu.description}</p>
        {user?.result.role === 'admin' && (
          <>
            <button className='edit-menu-button' onClick={handleEdit}>Edit</button>
            <button className='delete-menu-button' onClick={() => dispatch(deleteMenu(menu._id))}>Delete</button>
          </>
        )}
    </div>
  )
}

export default Menu