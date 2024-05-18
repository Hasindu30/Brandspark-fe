import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menures from '../../assets/menures.png'


const Navbar = () => {
  const [mobileMenu,setMobileMenu] =useState(false);
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className='navbar'>
         <Link to='/'><img src={logo} alt="" className='logo'/> </Link>
          
            <ul className='navbar-mid'>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Logomaker'>Logo maker</Link></li>
                <li>Brand kit</li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'>Contact</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'>Experts</Link></li>
                
            </ul>
            <ul className='navbar-right'>
            <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Login'>Login</Link></li>
            <li className='btnnav'><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Signup'>Signup</Link></li>
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
