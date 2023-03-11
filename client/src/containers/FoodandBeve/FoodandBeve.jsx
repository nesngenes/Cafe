import React from 'react'
import './foodNbeve.css'
import { images } from '../../constants';

const FoodandBeve = () => {

  const pictures = [images.pizza, images.latte, images.drinks, images.bakery]

  return (
    <div className='food-and-beve container'>
      <h1 className='green-dancing-script center'>Food and Beverages</h1>
      
      <img src={images.japanesePattern} className='japan-pattern j-pattern-1'/>
      <img src={images.japanesePattern} className='japan-pattern j-pattern-2'/>
      <img src={images.japanesePattern} className='japan-pattern j-pattern-3'/>
      <img src={images.japanesePattern} className='japan-pattern j-pattern-4'/>
      <img src={images.flower_three} className='flower-three'/>
      <img src={images.flower_one} className='flower-one'/>
      <img src={images.flower_one} className='small-flower-two'/>
      <img src={images.flower_one} className='small-flower-three'/>
      <img src={images.flower_one} className='small-flower-four'/>

      <div className='food-and-beve-content'>


        <div className='food-and-beve-pics'>
          {pictures.map((img) => (
            <img alt='imagesofmenu' src={img} />
          ))}
        </div>

        <div className='why-choose-us-content'>
            <div className='why-choose-us'>
              <p className='green-dancing-script'>why choose us ?</p>
              <div className='green-line'/>
            </div>

            <div className='why-are-we-the-best'>
            <h1 className='heading'> <span className='green'>Why</span> we are the best ?</h1>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>
            </div>

            <div className='white-button'>
              <p className='twenty green'>+20</p>
              <div className='years-of-experienced'>
                <p>Years of</p>
                <p className='experienced'>Experienced</p>
              </div>
            </div>

        </div>

      </div>


    </div>
  )
}

export default FoodandBeve