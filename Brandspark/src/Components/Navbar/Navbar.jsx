import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menures from '../../assets/menures.png'
import {Link } from 'react-router-dom'


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
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Brandname'>Brand Name</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Logomaker'>Logo Maker</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/BrandKit'>Brand Kit</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'>Contact</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'>Experts</Link></li>
                
            </ul>
            <ul className='navbar-right'>
            <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Login'>Login</Link></li>
            <li className='btnnav'><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Signup'>Signup</Link></li>
            </ul>
            
      <ul className={mobileMenu ? 'response' : 'hide-mobile-menu'}>
      <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Brandname'>Brand name</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Logomaker'>Logo maker</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/BrandKit'>Brand Kit</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'>Contact</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'>Experts</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Login'>Login</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Signup'>Signup</Link></li>
      </ul>

      <img src={menures} alt="" className='menures' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar
