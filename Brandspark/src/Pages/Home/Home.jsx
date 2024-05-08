import React, {useState,useEffect} from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import images from '../Home/data/images'
import CustomSlider from '../Home/slider/Custom.slider'
import logomockup from '../../assets/logomockups.png'
import logomakerhome from '../../assets/logomakerhome.png'
import brandhome from '../../assets/brandhome.png'
import homecontact from '../../assets/homecontact.png'
import homeexpert from '../../assets/homeexpert.png'




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
        <h1>Create your own brand and promote </h1>
          <p>Welcome to Brandspark, where we sculpt your vision into reality. 
            Our mission is to empower individuals and businesses to create their own distinct identities. 
            Join us in crafting your brand story and standing out in the crowded market. Let's embark on this journey of creativity and innovation together
          </p>
          <button className='getstart'>Get start</button>
          
        </div>
        <img src={brandhome} alt=""/>
        </div>

        <div className="logomaker-home">
      <img src={homecontact} alt=""/>
        <div className="homeleft">
        <h1>Contact to Brandspark to your business</h1>
          <p>To get start with Brandspark AI-powered platform 
            to promote your own brand and bring your brand to life contact us and visit 
            our Ridiculous packages.You can get all the support you need to develop your business 
            through Brandspark.Contact us today without delay.
          </p>
          <button className='getstart'>Get start</button>
        </div>
        </div>

        <div className="logomaker-home">
      
        <div className="homeleft">
        <h1>Analyze your business with Brandspark's experts</h1>
          <p>Whether you're looking to optimize your marketing strategies, enhance your brand identity, or streamline your operations, our experts are here to help. By leveraging years of industry experience and cutting-edge analytical tools, we provide actionable recommendations tailored to your specific needs.
        
Ready to take your business to the next level? Get in touch with our experts today to schedule a consultation.
          </p>
          <button className='getstart'>Get start</button>
        </div>
        <img src={homeexpert} alt=""/>
        </div>
        
      
    </div>
    
  )
}

export default Home