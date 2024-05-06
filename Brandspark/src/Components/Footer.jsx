import React from 'react'
import './Footer.css';

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import logo1 from '../assets/logo1.png'



const Footer = () => {
  return (
    <div className='fotteradj'>
        
<footer className="footer-distributed">

      <div className="footer-left">
        <ul className='lbrands'>

        <li className='logo1'><img src={logo1} alt="logo1" /></li>
        <li><h3 >BrandSpark</h3></li>
        </ul>

        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          
          <a href="#">BrandSpark</a>
        
          <a href="#">Packages</a>
        
          <a href="#">About</a>
          
          <a href="#">Logo</a>
          
          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">BrandSpark © 2024</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>BrandSpark</span> Sri Lanka</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>Contact Us</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:#">brandspark@company.com</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the company</span>
          BrandSpark: Igniting brands with innovative logos, expert advice, and strategic promotion for unparalleled market visibility and success
        </p>

        <div className="footer-icons">
          <ul className='icons'>
            <li><img src={icon1} alt="icon1" /></li>
            <li><img src={icon2} alt="icon2" /></li>
            <li><img src={icon3} alt="icon3" /></li>
            <li><img src={icon4} alt="icon4" /></li>

          </ul>



        </div>

      </div>

    </footer>

        
    </div>
  )
}

export default Footer;