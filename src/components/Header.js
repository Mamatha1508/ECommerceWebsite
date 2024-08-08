import React from 'react'
import { ALT_LOGO, LOGO } from '../utils/constants';

const Header=()=>{

    return (
        <div>
            <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO} alt={ALT_LOGO}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Download App</li>
                    <li>Become a supplier</li>
                    <li>Newsroom</li>
                    <li>Cart</li>
                    
                </ul>
                <div className='profile-container'>
                <button className='profile-icon'>MY</button>
                </div>
             
            </div>
        </div>
        <div className='category-container'>
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
                <li>Kitchen</li>
            </ul>
        </div>

        </div>
        
    )
}


export default Header;