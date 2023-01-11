import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './menu.css'
import Tilt from 'react-tilt'


import Navbar from '../../components/Navbar/Navbar'
import { images } from '../../constants';

const Menu = () => {

    return (
        <div className='main-menu-page'>
            <div className='main-menu-content'>
                <Navbar />
                <div className='container'>
                    <h1 className='main-menu-heading'>Choose Catergory:</h1>
                    <div className='two-main-menu'>
                        <Tilt className='wrapper-menu wrapper-beverages'>
                            <Link className='menu-links' to="/labuenacafe/menus/sub-menu?menu=beverages">
                                <div className='wrapper-content'>
                                    <h3 className='menu-subheading'>Beverages</h3>
                                    <img src={images.drinks} alt="drinks" />
                                    <p>Amazing coffees from around the world. Handcrafted beverages to discover and enjoy. We love bringing you these things.</p>
                                </div>
                            </Link>
                        </Tilt>
                        <Tilt className='wrapper-menu wrapper-food'>
                            <Link className='menu-links' to="/labuenacafe/menus/sub-menu?menu=food">
                                <div className='wrapper-content'>
                                    <h3 className='menu-subheading'>Food</h3>
                                    <img src={images.pancake} alt="food" />
                                    <p>Our pastries and sandwiches are made with high-quality, simple ingredients. So all the goodness you taste is real food, simply delicious</p>
                                </div>
                            </Link>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu