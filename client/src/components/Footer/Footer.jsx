import React from 'react';
import images from '../../constants/images';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-page'>
      <div className='footer container'>
        
        <div className='footer-content'>
          <h2>About Us.</h2>
          <p>orporate clients and leisure travelers has
            been relying on Groundlink for dependab
            safe, and professional chauffeured car
            service in major cities across World.</p>
          <div className='clock'>
            <div className='clock-img'>
              <img src={images.clock} alt="clock" />
            </div>
            <div className='hours'>
              <p>Opening Hours</p>
              <p>Mon - Sat(8.00 - 6.00) Sunday - Closed</p>
            </div>
          </div>
        </div>

        <div className='footer-content'>
          <h2>Useful Links</h2>
          <p>About</p>
          <p>Menu</p>
          <p>Location</p>
          <p>Contact</p>
        </div>

        <div className='footer-content'>
          <h2>Help ?</h2>
          <p>FAQ</p>
          <p>Terms & Conditions</p>
          <p>Documentation</p>
          <p>Support Policy</p>
          <p>Privacy</p>
        </div>

      </div>

      <div className='copyright'>
        <p>Copyright © 2022 by Agnes. All Rights Reserved.</p>
        <div className='social-media'>
          <img src={images.insta} alt="" />
          <img src={images.facebook} alt="" />
          <img src={images.twitter} alt="" />
        </div>
      </div>
    </div>


  )
}

export default Footer;
