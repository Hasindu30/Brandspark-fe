import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menures from '../../assets/menures.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [mobileMenu,setMobileMenu] =useState(false);
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className='navbar'>
         <NavLink to='/'><img src={logo} alt="" className='logo'/> </NavLink>
          
            <ul className='navbar-mid'>
                <li><NavLink activeClassName='active-link' style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/'>Home</NavLink></li>
                <li><NavLink to='/Logomaker' activeClassName='active-link' style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} >Logo maker</NavLink></li>
                <li>Brand kit</li>
                <li><NavLink style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'>Contact</NavLink></li>
                <li><NavLink style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'>Experts</NavLink></li>
                
            </ul>
            <ul className='navbar-right'>
            <li><NavLink activeClassName='active-link' style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Login'>Login</NavLink></li>
            <li className='btnnav'><NavLink activeClassName='active-link' style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Signup'>Signup</NavLink></li>
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
