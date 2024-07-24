import React from 'react'
import './Home.css'
import images from '../Home/data/images'
import CustomSlider from '../Home/slider/Custom.slider'
import logomockup from '../../assets/logomockups.png'
import logomakerhome from '../../assets/logomakerhome.png'
import brandhome from '../../assets/brandhome.png'
import brandname from '../../assets/brandname.png'
import homecontact from '../../assets/homecontact.png'
import homeexpert from '../../assets/homeexpert.png'
import homegpt from '../../assets/homegpt.png'
import tick from '../../assets/tick.png'
import cardimg1 from '../../assets/cardimg1.png'
import cardimg2 from '../../assets/cardimg2.png'
import cardimg3 from '../../assets/cardimg3.png'
import cardimg4 from '../../assets/cardimg4.png'
import cardimg5 from '../../assets/cardimg5.png'
import cardimg6 from '../../assets/cardimg6.png'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'





const Home = () => {
  
  return (
    <div>
      <Navbar/>
      
      <div className="headertext">
        <h1>Design a brand for your own business</h1>
        <p>Utilize Brandspark AI-powered platform to promote your own brand </p>
        <form action="/Brandname" method="get">
          <input className='company' type="text" placeholder='Enter Your Company Name'/>
          <button className='getstart'>Get started</button>
        </form>
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
      <div className="logomaker-home1">
      
      <div className="homeleft1">
      <h1>Create your own business to a branded name </h1>
        <p>An outstanding company name should make your organization stand out and act as a 
          blank canvas for you to infuse your own meaning into. With the 
          Brandspark Business Name Generator, you can quickly explore logo possibilities, 
          verify availability, and generate brainstorming ideas.
        </p>
        <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Brandname'><button className='getsta'>Get started</button></Link>
        
      </div>
      <img src={brandname} alt=""/>
      </div>

      <div className="logomaker-home1">
      <img src={logomakerhome} alt=""/>
        <div className="homeleft1">
        <h1>Create your awesome logo</h1>
          <p>To get started with Brandspark's logo maker just enter your business name and let 
          our logo creator quickly creates outstanding logo designs. You can search through thousands 
          of custom logos made with your company name to find the ideal one. Do you need a logobr
           that is more precise? 
          Not a problem! To narrow down the logos and find a design that truly works for your company, you may enter keywords.
          </p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Logomaker'><button className='getsta'>Get started</button></Link>
        </div>
        </div>

        <div className="logomaker-home1">
      
        <div className="homeleft1">
        <h1>Create your own brand and promote </h1>
          <p>Welcome to Brandspark, where we sculpt your vision into reality. 
            Our mission is to empower individuals and businesses to create their own distinct identities. 
            Join us in crafting your brand story and standing out in the crowded market. Let's embark on this journey of creativity and innovation together
          </p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/BrandKit'><button className='getsta'>Get started</button></Link>
          
        </div>
        <img src={brandhome} alt=""/>
        </div>

        <div className="logomaker-home1">
      <img src={homecontact} alt=""/>
        <div className="homeleft1">
        <h1>Contact Brandspark for your business</h1>
          <p>To get start with Brandspark AI-powered platform 
            to promote your own brand and bring your brand to life contact us and visit 
            our Ridiculous packages.You can get all the support you need to develop your business 
            through Brandspark.Contact us today without delay.</p>
            <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'><button className='getsta'>Get started</button></Link>
        </div>
        </div>

        <div className="logomaker-home1">
      
        <div className="homeleft1">
        <h1>Analyze your business with Brandspark's experts</h1>
          <p>Whether you're looking to optimize your marketing strategies, enhance your brand identity, or 
            streamline your operations, our experts are here to help. By leveraging years of industry experience
             and cutting-edge analytical tools, we provide actionable recommendations tailored to your specific needs.Ready to take your 
             business to the next level? Get in touch with our experts today to schedule a consultation.</p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Experts'><button className='getsta'>Get started</button></Link>
        </div>
        <div className="logomakerimg">
        <img src={homeexpert} alt=""/>
        </div>
        </div>

        <div className="logomaker-home2">
      <img className='gpt-image' src={homegpt} alt="gpt-image"/>
        <div className="homeleft1">
        <h1>All-in-one Brandspark AI expert</h1>
          <p>To get start with Brandspark AI-powered platform 
            to promote your own brand and bring your brand to life contact our best and all in one chatbot and visit our Ridiculous packages.You can get all the support you need to develop your business 
            through Brandspark online experter.Contact us today without delay.</p>
            <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/onlinegpt'><button className='getsta'>Get started</button></Link>
        </div>
        </div>
        
        



          <div className="homecard-header">
          <h1>Brandspark is best partner of your business</h1>
          <p>provides everything you need to start your business and Brandspark amazing right now. <br />
          You maintain creative control while artificial intelligence handles the labor-intensive graphic design tasks. </p>
          </div>
        
      <div className="homecards">
        
        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg1} alt="" />
          </div>
          <h1> Brand name</h1>
          <ul>
            <li><img src={tick} alt="" />Create your own brand name to your future company</li>
            <li><img src={tick} alt="" />AI technology create professional and creative brandname</li>
            <li><img src={tick} alt="" />You can genarate your brand name with your target audience</li>
            <li><img src={tick} alt="" />Brandspark can suggest names that evoke feelings of trust </li>
          </ul>
        </div>

        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg2} alt="" />
          </div>
          <h1>Create your logos</h1>
          <ul>
            <li><img src={tick} alt="" />Create your own logo to company</li>
            <li><img src={tick} alt="" />Easily alter colors, symbols, size with Brandspark.</li>
            <li><img src={tick} alt="" />Use filters and explore diverse logo ideas</li>
            <li><img src={tick} alt="" />rowse 1000’s of personalized and AI generated logo designs online</li>
          </ul>
        </div>

        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg3} alt="" />
          </div>
          <h1>Brand kit</h1>
          <ul>
            <li><img src={tick} alt="" />Increase your company's revenue with high-caliber marketing collateral</li>
            <li><img src={tick} alt="" />View actual mockups of your logo on pencils, T-shirts, and other items</li>
            <li><img src={tick} alt="" />advertising campaigns across various platforms</li>
            <li><img src={tick} alt="" />Monitor social media conversations and sentiment related to your brand  </li>
          </ul>
        </div>
        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg4} alt="" />
          </div>
          <h1>Analyse your business</h1>
          <ul>
            <li><img src={tick} alt="" />analyze large datasets from various sources</li>
            <li><img src={tick} alt="" />Brandsparkcan uncover patterns, trends, and correlations</li>
            <li><img src={tick} alt="" />Implement predictive analytics models </li>
            <li><img src={tick} alt="" />analyze customer feedback and social media conversations about your brand</li>
          </ul>
        </div>
          

        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg5} alt="" />
          </div>
          <h1>Best Brandspark packages</h1>
          <ul>
            <li><img src={tick} alt="" />Brandspark has an interesting number of packages</li>
            <li><img src={tick} alt="" />There are packages with many special privileges</li>
            <li><img src={tick} alt="" />A host of exclusive perks are available at unbelievable prices</li>
            <li><img src={tick} alt="" />Choose the right package to grow your company</li>
          </ul>
        </div>

        <div className="cardx">
          <div className="cardimg">
            <img src={cardimg6} alt="" />
          </div>
          <h1>Experts</h1>
          <ul>
            <li><img src={tick} alt="" />Brandspark have world best experts staff and ai based experts</li>
            <li><img src={tick} alt="" />brand promotion efforts align with your brand values</li>
            <li><img src={tick} alt="" />advise on ethical considerations related to data privacy, algorithmic bias</li>
            <li><img src={tick} alt="" />provide strategic guidance and implementation support </li>
          </ul>
        </div>
      </div>
          
            <div className="bottomtext1">
                  <p>Transform your imaginative idea into a company and brand.</p>
                  <input className='company' type="text" placeholder='Enter Your Company Name'/>
                  <button className='getstart'>Get started</button>
            </div>
            
         </div>
    
  )
}

export default Home