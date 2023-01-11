import React from 'react'

import './chefs.css'

import { images } from '../../constants'

const Chefs = () => {
  const chefs = [
    {
      image: images.kevin,
      nickname: 'S.Kevin',
      title: 'Chief Chef'
    },
    {
      image: images.daniel,
      nickname: 'C. Daniel',
      title: 'Assistant Chef'
    },
    {
      image: images.red,
      nickname: 'M. Red',
      title: 'Advertising Chef'
    },
    {
      image: images.sergei,
      nickname: 'C. Sergei',
      title: 'Chef'
    },
  ]


  return (
    <div className='chefs-page container'>
      <h1 className='green-dancing-script center'>Chefs</h1>
      <h1 className='heading meet-out-chefs center'><span className='green'>Meet</span> Our Chef</h1>

      <div className='chefs'>
        {chefs.map((chef) => (
          <div className='chef'>
            <img src={chef.image} alt="" />
            <div className='chef-description'>
              <p className='chef-nickname'>{chef.nickname}</p>
              <p className='chef-title'>{chef.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='center'>
        <button className='chef-button'>See More</button>
      </div>

    </div>
  )
}

export default Chefs