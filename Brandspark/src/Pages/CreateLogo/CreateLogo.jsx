import React from 'react'
import './CreateLogo.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import logodesign from '../../assets/logodesign.png'
import gl1 from '../../assets/Logoimages/gl1.jpeg'
import gl2 from '../../assets/Logoimages/gl2.jpg'
import gl3 from '../../assets/Logoimages/gl3.jpg'
import gl4 from '../../assets/Logoimages/gl4.png'
import gl5 from '../../assets/Logoimages/gl5.png'
import gl6 from '../../assets/Logoimages/gl6.png'
import gl7 from '../../assets/Logoimages/gl7.jpg'
import gl8 from '../../assets/Logoimages/gl8.jpg'
import gl9 from '../../assets/Logoimages/gl9.png'
import gl10 from '../../assets/Logoimages/gl10.jpg'
import gl11 from '../../assets/Logoimages/gl11.jpg'
import gl12 from '../../assets/Logoimages/gl12.png'
import logobk2 from '../../assets/Logoimages/logobk2.png'
import { Link } from 'react-router-dom';



const CreateLogo = () => {
  return (
    <div>
    <Navbar/>
    <div className="logoheadertext">
        <h1>Brandspark logo maker</h1>
        <p>Brandspark logo maker helps you develop a unique
           logo you'll adore by fusing artificial intelligence with your preferred logo design. 
           Five minutes and a few clicks are all required.</p>

          
           <input className='logom' type="text" placeholder='Enter Your Company Name'/>
          

           <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/genlogo'> <button className='getstart'>Create logo</button></Link>
       
      </div>

    <div className='logoidea'>
        <h1>Unique logo concepts designed just for you</h1>
        <div className='logoimages'>
          <ul className='line1'>
            <li><img src={gl1} alt="gl1" /></li>
            <li><img src={gl2} alt="gl2" /></li>
            <li><img src={gl3} alt="gl3" /></li>
          </ul>
          <ul className='line2'>
            <li><img src={gl4} alt="gl4" /></li>
            <li><img src={gl5} alt="gl5" /></li>
            <li><img src={gl6} alt="gl6" /></li>
          </ul>
          <ul className='line3'>
            <li><img src={gl7} alt="gl7" /></li>
            <li><img src={gl8} alt="gl8" /></li>
            <li><img src={gl9} alt="gl9" /></li>
          </ul>
          <ul className='line4'>
            <li><img src={gl10} alt="gl10" /></li>
            <li><img src={gl11} alt="gl11" /></li>
            <li><img src={gl12} alt="gl12" /></li>
          </ul>
          </div>
       </div>
          <div className='bottomimage'>
            <ul>
            <li><img src={logobk2} alt="logobk2" /></li>
            <li><h2><span className='brandsp'>BrandSpark</span> where creativity meets identity. <br /> Discover carefully chosen logo designs, 
              from minimalist emblems to detailed illustrations, 
              crafted to elevate your brand's presence and leave a lasting impression on your audience.
              &nbsp;&nbsp;<br /><br /><button type="submit">Get started</button></h2></li>
            </ul>

          </div>
    <br/><br/><br/>




    
    </div>
  )
}

export default CreateLogo