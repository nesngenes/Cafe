import React from 'react';

import './main.css';

import { images } from '../../constants';


const Main = () => {
  return (
    <div className='main-page container'>
      
      <div className='intro'>
        <p className='green-dancing-script'>High Quality Food & Beverages</p>
        <h1 className='heading'><span className='green'>It's</span> all coming from the fresh ingredients and the art of cooking</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
        <div className='main-page-button'>
          <button className='green-button'>See Menu</button>
        </div>
      </div>

      <div className='main-images'>
        <img className='main-image' src={images.main} alt='' />
        <img className='main-lime' src={images.lime} alt='' />
        <img className='main-leaf' src={images.leaf} alt='' />
        <div className='green-border'></div>
      </div>

    </div>
  )
}

export default Main;
