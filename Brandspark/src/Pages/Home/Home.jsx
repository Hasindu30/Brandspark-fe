import React, {useState,useEffect} from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import images from '../Home/data/images'
import CustomSlider from '../Home/slider/Custom.slider'



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

      
      
      
    </div>
  )
}

export default Home