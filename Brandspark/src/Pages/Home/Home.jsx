import React, {useState,useEffect} from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import images from '../Home/data/images'
import CustomSlider from '../Home/slider/Custom.slider'
import logomockup from '../../assets/logomockups.png'
import logomakerhome from '../../assets/logomakerhome.png'



const Home = () => {
  
  return (
    <div>
      <Navbar/>
      
      <div className="headertext">
        <h1>Design brand of your own Business</h1>
        <p>Utilize Brandspark AI-powered platform to promote your own brand </p>
        <input className='company' type="text" placeholder='Enter Your Company Name'/>
        <button className='getstart'>Get start</button>
      </div>
      
      <div className="slider">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      </div>
      
      <div className="logomockup">
        
        <img src={logomockup} alt="" className='logomockups' />
      </div>

      <div className="homeheader">
        <h1>Best place to start your own business and <br />promote your brand</h1>
      </div>

      <div className="logomaker-home">
      <img src={logomakerhome} alt=""/>
        <div className="homeleft">
        <h1>Create your awesome logo</h1>
          <p>To get started with Brandspark's logo maker just enter your business name and let 
          our logo creator quickly creates outstanding logo designs. You can search through thousands 
          of custom logos made with your company name to find the ideal one. Do you need a logobr
           that is more precise? 
          Not a problem! To narrow down the logos and find a design that truly works for your company, you may enter keywords.
          </p>
          <button className='getstart'>Get start</button>
        </div>
        </div>

        <div className="logomaker-home">
      
        <div className="homeleft">
        <h1>Create your own brand </h1>
          <p>To get started with Brandspark's logo maker just enter your business name and let 
          our logo creator quickly creates outstanding logo designs. You can search through thousands 
          of custom logos made with your company name to find the ideal one. Do you need a logobr
           that is more precise? 
          Not a problem! To narrow down the logos and find a design that truly works for your company, you may enter keywords.
          </p>
          <button className='getstart'>Get start</button>
          
        </div>
        <img src={logomakerhome} alt=""/>
        </div>
      
    </div>
    
  )
}

export default Home