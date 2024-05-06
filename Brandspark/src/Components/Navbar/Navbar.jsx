import React from 'react'

import './Navbar.css'
import logo from '../../assets/logo2.png'

const Navbar = () => {
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
            
            
        </nav>
  )
}

export default Navbar
