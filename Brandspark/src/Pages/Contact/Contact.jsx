import React from 'react'
import './Contact.css' 
import contactcard1 from '../../assets/contactuscard1.jpg'
import contactcard2 from '../../assets/contactcard2.jpg'
import contactcard3 from '../../assets/contactcard3.jpg'
import ptick from '../../assets/ptick.png'
import star from '../../assets/starticon.png'



const Contact = () => {
  return (
    <div>
      <div className="contactheader">
        <h1>Contact Brandspark</h1>
        <p>We are available to assist you in locating the ideal contact!</p>
      </div>

      <div className="contactcards">
      <div className="cardc">
          <div className="cardcimg">
          <img src={contactcard1} alt="" />
          </div>
          <h1>Live Support</h1>
          <p>The support team of Brandspark is available! Send an email to Brandspark@mail.com or start a chat.</p>
          <button className='getstart'>Get Support</button>
        </div>
        <div className="cardc">
          <div className="cardcimg">
          <img src={contactcard2} alt="" />
          </div>
          <h1>Help Commiunity</h1>
          <p>Learn the simple tips and answers for creating logos and prmote your brand with Brandspark help comiunity.</p>
          <button className='getstart'>Get Support</button>
        </div>
        <div className="cardc">
          <div className="cardcimg">
          <img src={contactcard3} alt="" />
          </div>
          <h1>Work with us</h1>
          <p>Become a part of a rapidly expanding organization that loves technology and design or your are a expert of business</p>
          <button className='getstart'>Join </button>
        </div>
      </div>

      <div className="packagelist">
        <h1>Choose Brandkit best packages for you</h1>
        <p>Bring your brand to life with Ridiculous packages</p>
        
        <div className="packagecard">
          <div className="cardp">
            <div className="cardpheader">
              <h2>Basic</h2>
              <h1>$9.99</h1>
              <p>Per month</p>
            </div>
            <ul>
            <li><img src={ptick} alt="" />only 4 brandname genarate </li>
            <li><img src={ptick} alt="" />only 4 logo design genarate</li>
            <li><img src={ptick} alt="" />one logo file to download</li>
            <li><img src={ptick} alt="" />full technical support</li>
            <li><img src={ptick} alt="" />limited experts support</li>
            <li><img src={ptick} alt="" />limited changes</li>
            <li><img src={ptick} alt="" />limited brandkit </li>
          </ul>
          <div className="bslect">
          <button className='select1'>Select</button>
          </div>
          </div>

          <div className="cardp">
            <div className="cardpheader">
              <h2>Primium</h2>
              <h1>$19.99</h1>
              <p>Per month</p>
            </div>
            <ul>
            <li><img src={star} alt="" />Unlimited brandname genarate </li>
            <li><img src={star} alt="" />Unlimited logo design genarate</li>
            <li><img src={star} alt="" />Unlimited logo file to download</li>
            <li><img src={star} alt="" />Lifetime technical support</li>
            <li><img src={ptick} alt="" />Unlimited experts support</li>
            <li><img src={star} alt="" />Unlimited  Ai experts support</li>
            <li><img src={ptick} alt="" />limited changes</li>
            <li><img src={ptick} alt="" />Full ownership</li>
            <li><img src={star} alt="" />Full garrent your Business</li>
            <li><img src={star} alt="" />Everything in brandkit</li>

          </ul>
          <div className="bslect">
          <button className='select2'>Select</button>
          </div>
          </div>

          <div className="cardp">
            <div className="cardpheader">
              <h2>Pro</h2>
              <h1>$14.99</h1>
              <p>Per month</p>
            </div>
            <ul>
            <li><img src={star} alt="" />Unlimited brandname genarate </li>
            <li><img src={star} alt="" />Unlimited logo design genarate</li>
            <li><img src={ptick} alt="" />10 logo file to download</li>
            <li><img src={ptick} alt="" />full technical support</li>
            <li><img src={ptick} alt="" />limited experts support</li>
            <li><img src={ptick} alt="" />Limited Ai expert support</li>
            <li><img src={ptick} alt="" />Garent your Business</li>
            <li><img src={star} alt="" />Unlimited changes</li>
            <li><img src={star} alt="" />Everything in brandkit</li>
            
          </ul>
          <div className="bslect">
          <button className='select3'>Select</button>
          </div>
          
          </div>
        </div>
        </div>
      
      
      

      
    </div>
  )
}

export default Contact
