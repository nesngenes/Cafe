import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './submenu.css'

import Navbar from '../../../components/Navbar/Navbar';
import { images } from '../../../constants';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SubMenu = () => {
    const query = useQuery();
    const menu = query.get('menu')

  return (
    <div className='sub-menu-page'>
        <Navbar />
        <div className='container'>

            {menu === 'beverages' && (
                <beverages className='beverages-sub-menu'>
                        <h1>LaBuena Beverages</h1>
                        <p>Bringing you a perfect cup of coffee. It’s what got us started in 1971, and it’s what keeps us going today.(That, plus the coffee.)</p>
                        <p>That’s why our coffee buyers travel the world, carefully selecting the finest beans. That’s why our master roasters stand watch over each batch, bringing each bean to its peak of flavour. And that’s why our friendly baristas handcraft each beverage to your order. We want you to discover your perfect, personal drink. Hey, when you feel as passionately about coffee as we do (and you do), it’s what the bean deserves.</p>

                        <div className='beverages-links'>
                            <Link className='espresso sub-menu' to="/labuenacafe/menus/variant?variant=espresso-beverages">
                                <p>Espresso Beverages</p>
                            </Link>
                            <Link className='brewed sub-menu' to="/labuenacafe/menus/variant?variant=brewed-coffee">
                                <p>Brewed Coffee</p>
                            </Link>
                            <Link className='blended sub-menu' to="/labuenacafe/menus/variant?variant=blended-beverages">
                                <p>Blended Beverages</p>
                            </Link>
                            <Link className='others sub-menu' to="/labuenacafe/menus/variant?variant=others">
                                <p>Others</p>
                            </Link>
                        </div>
                </beverages>
            )}
            
            {menu === 'food' && (    
                <food className='food-sub-menu'>
                    <h1>Food</h1>
                    <p>Here at LaBuena, we’re passionate about pairing great coffee with great food.</p>
                    <p>That's why we are constantly developing our food range to offer a naturally delicious selection of freshly prepared food exclusively for you. Whether it’s our Fresh Carrot Muffin to start off your day or the all-time favorite Rustica Chicken Cranberry Sandwich for lunch, there is always something special to accompany your favorite Starbucks coffee.</p> 
                    <p>For those of you looking for a sweet indulgent, we have a range of desserts and pastries for you to choose from. So the next time you and your friends feel that craving for a sweet treat, try our Triple Chocolate Cake or our famous Cinnamon Roll for the ultimate dessert experience.</p>
                    <div className='food-links'>
                        <Link className='core sub-menu' to="/labuenacafe/menus/variant?variant=core-menu">
                            <p>Core Menu</p>
                        </Link>
                        <Link className='reserve sub-menu' to="/labuenacafe/menus/variant?variant=reserve-menu">
                            <p>Reserve Menu</p>
                        </Link>
                    </div>
                </food>
            )}
        </div>
    </div>
  )
}

export default SubMenu