import React from 'react'

import './fasility.css'

import { images } from '../../constants';

const Fasility = () => {

  const fasilities = [
    {
      image: images.wifi,
      description: 'Free Wifi'
    },
    {
      image: images.restaurant,
      description: 'Cozy Place'
    },
    {
      image: images.dish,
      description: 'High Quality of Food'
    },
    {
      image: images.chef,
      description: 'Professional Chefs'
    },
  ]
  return (
    <div className='fasility'>
      <div className='fasilities'>
        {fasilities.map((f) => (
          <div className='fasility-content'>
            <img src={f.image} alt="" />
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Fasility