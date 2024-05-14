import React from 'react'
import './CreateLogo.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import logodesign from '../../assets/logodesign.png'
import gl1 from '../../assets/Logoimages/gl1.png'
import gl2 from '../../assets/Logoimages/gl2.png'
import gl3 from '../../assets/Logoimages/gl3.png'
import gl4 from '../../assets/Logoimages/gl4.png'
import gl5 from '../../assets/Logoimages/gl5.png'
import gl6 from '../../assets/Logoimages/gl6.png'
import gl7 from '../../assets/Logoimages/gl7.png'
import gl8 from '../../assets/Logoimages/gl8.png'
import gl9 from '../../assets/Logoimages/gl9.png'
import logobk2 from '../../assets/Logoimages/logobk2.png'


const CreateLogo = () => {
  return (
    <div>
    
    <div className='upper'>
    <div className='toptext'><br/><br/>
    <h1 className='bs'>Create your own logo <br />with us</h1>
    <br/>
    <h2 className='bs3'>Unlock Your Brand's Full Potential: Trust BrandSpark for Expert Logo Creation and Generation. 
    Let Our Creative Team Ignite Your Spark of Success! Discover the Perfect Emblem to Illuminate Your Brand's Journey.</h2>
    </div>

    <div className='logodesign'>
      <img src={logodesign} alt="logodesign" />
    </div>
   
    <div className='button'> <h1 className='gtext'>Generate a Logo</h1>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Get started</button>

    </div>
    
    </div><br /><br /><br /><br /><br />

    <div className='logoidea'><br/><br />
        <h1>Unique logo concepts designed just for you</h1><br /><br />
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
          </div>
          </div>
          <div className='bottomimage'>
            <ul>
            <li><img src={logobk2} alt="logobk2" /></li>
            <li><h2><span className='brandsp'>Brandspark</span> where creativity meets identity. <br />Discover meticulously curated logo designs, 
              from minimalist emblems to intricate illustrations, 
              crafted to elevate your brand's presence and leave a lasting impression on your audience
              &nbsp;&nbsp;<br /><br /><button type="submit">Get started</button></h2></li>
            </ul>

          </div>
    <br/><br/><br/>




    <Footer/>
    </div>
  )
}

export default CreateLogo