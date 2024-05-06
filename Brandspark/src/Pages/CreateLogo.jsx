import React from 'react'
import './CreateLogo.css';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import logodesign from '../assets/logodesign.png';

const CreateLogo = () => {
  return (
    <div>
    <Navbar/>
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
    
    </div><br /><br /><br /><br /><br /><br />

    <div className='logoidea'><br/>
        <h1>Best Logo Ideas</h1>

    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




    <Footer/>
    </div>
  )
}

export default CreateLogo