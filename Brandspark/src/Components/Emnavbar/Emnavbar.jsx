import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import logoem from '../../assets/logo2.png'
import './Emnavbar.css'
import menuem from '../../assets/menures.png'


const Emnavbar = () => {
    const [mobileMenu,setMobileMenu] =useState(false);
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  };
   
  return (
    <nav className="emnavbar">
      
      <Link to='/'><img src={logoem} alt="" className='logo'/> </Link>


      <ul className={mobileMenu ? 'responsem' : 'hide-mobile-menuem'}>
                 <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Brandname'>Brand name</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Logomaker'>Logo maker</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/BrandKit'>Brand Kit</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'>Contact</Link></li>
                <li><Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'>Experts</Link></li>
                
      </ul>
      <img src={menuem} alt="menuem" className="menu-iconem" onClick={toggleMenu}/>
      

      
      
    </nav>
    

  )
}

export default Emnavbar
