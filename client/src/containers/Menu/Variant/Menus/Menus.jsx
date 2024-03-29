import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../../../components/Navbar/Navbar';
import Menu from '../Menu/Menu';
import './menus.css'

const Menus = ({setCurrentId}) => {
  const {menus, isLoading} = useSelector((state) => state.menus);
  if(!menus.length && !isLoading) return 'No Menu yet';

  
  return (
    isLoading ?<p className='loading'>Loading ... </p> : (
      <div className='menus-page'>
        <Navbar className='navbar' />
        <div className='menus-card'>
          {menus.map((menu) => (
            <div className='menu-card'>
              <Menu menu={menu} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default Menus