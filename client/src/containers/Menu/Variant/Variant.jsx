import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Menus from './Menus/Menus';
import {getMenusByVariant} from '../../../actions/menus';
import { images } from '../../../constants';

import './styles.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Variant = ({setCurrentId}) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const variant = query.get('variant');
  const [image, setImage] = useState('')

  const setBackgroundImage = () => {
    if(variant === 'espresso-beverages'){
      setImage(images.coffeeDARK)
    } else if (variant === 'brewed-coffee') {
      setImage(images.coffeeDARK)
    } else if (variant === 'blended-beverages') {
      setImage(images.coffeeDARK)
    }
    else if (variant === 'others') {
      setImage(images.coffeeDARK)
    }
    else if (variant === 'core-menu') {
      setImage(images.pizzaDARK)
    }
    else if (variant === 'reserve-menu') {
      setImage(images.menubgDARK)
    }
  }

  useEffect(() => {
      if(variant) {
        setBackgroundImage()
        dispatch(getMenusByVariant(variant))
      }
     }, [dispatch, variant])

  return (
    <div className='variant-page'>
      <Menus setCurrentId={setCurrentId} />
      <img className='background-menu' src={image} alt="" />
      <overlay className='overlay' />
    </div>
  )
}

export default Variant