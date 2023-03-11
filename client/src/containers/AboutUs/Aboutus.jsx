import React from 'react';

import './aboutUs.css';

import { images } from '../../constants';

const Aboutus = () => {

  const paragraphs = ['Lacus nisi, et ac dapibus sit eu velit in consequat.', 'Quisque diam pellentesque bibendum non dui volutpat fringilla.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.']

  return (
    <div className='about-us container'>

      <div className='about-us-content'>
        <p className='green-dancing-script'>About us</p>
        <img src={images.leafAboutUs} className='leaf-icon' alt="" />
        <h1 className='heading'><span className='green'>We </span> have our own garden to produce fresh and high quality ingredients</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        

        {paragraphs.map((p) => (
          <div className='list-check'>
              <img src={images.check} alt='checklist' />
              <p>{p}</p>
          </div>
          ))}

        <button className='green-button'>See Menu</button>
      </div>
      
      <div className='garden-image'>
        <img src={images.garden}/>
      </div>

    </div>
  )
}

export default Aboutus;
