import React from 'react';

import Main from './Main';
import Navbar from '../Navbar/Navbar';
import Aboutus from '../../containers/AboutUs/Aboutus';


import './landing.css'
import Footer from '../Footer/Footer';
import FoodandBeve from '../../containers/FoodandBeve/FoodandBeve';
import Welcome from '../../containers/Welcome/Welcome';
import Fasility from '../../containers/Fasility/Fasility';
import Chefs from '../../containers/Chefs/Chefs';


const LandingPage = () => {
  return (
    <>
      <div className='landing-page'>
        <div className='landing-content'>
          <Navbar />
          <Main />
        </div>
      </div>
          <Aboutus />
          <FoodandBeve />
          <Welcome />
          <Fasility />
          <Chefs />
          <Footer />
    </>
  )
}

export default LandingPage;
