import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menures from '../../assets/menures.png'
import Home from '../../Pages/Home/Home'

const Navbar = () => {
  const [mobileMenu,setMobileMenu] =useState(false);
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className='navbar'>
         <img src={logo} alt="" className='logo'/> 
          
            <ul className='navbar-mid'>
                <li>Home</li>
                <li>Logo maker</li>
                <li>Brand kit</li>
                <li>Contact</li>
                <li>Experts</li>
                
            </ul>
            <ul className='navbar-right'>
            <li>Login</li>
            <li className='btnnav'>Signup</li>
            </ul>
            
          <ul className={mobileMenu ? 'response' : 'hide-mobile-menu'}>

                <li>Home</li>
                <li>Logo maker</li>
                <li>Brand kit</li>
                <li>Contact</li>
                <li>Experts</li>
                <li>Login</li>
                <li>Signup</li>
          </ul>
          <img src={menures} alt="" className='menures' onClick={toggleMenu}/>
        </nav>
  )
}

export default Navbar
