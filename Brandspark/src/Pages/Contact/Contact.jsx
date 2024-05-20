import React from 'react'
import './Contact.css' 
import contactcard1 from '../../assets/contactuscard1.jpg'
import contactcard2 from '../../assets/contactcard2.jpg'
import contactcard3 from '../../assets/contactcard3.jpg'



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
      
      
      

      
    </div>
  )
}

export default Contact
