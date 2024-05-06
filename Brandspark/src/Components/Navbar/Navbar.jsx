import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
            
            <ul className='navbar-mid'>
                <li>Home</li>
                <li>Logo maker</li>
                <li>Bussiness</li>
                <li>Contact</li>
                
            </ul>
            <ul className='navbar-right'>
            <li>Login</li>
            <li className='btn'>Signup</li>
            </ul>
            
        </nav>
  )
}

export default Navbar
