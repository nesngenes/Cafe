import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Aboutus from '../AboutUs/Aboutus'

import './AboutUsPage.css'

const AboutUsPage = () => {
  return (
    <div className='about-us-page'>
        <Navbar />
        <Aboutus />
    </div>
  )
}

export default AboutUsPage