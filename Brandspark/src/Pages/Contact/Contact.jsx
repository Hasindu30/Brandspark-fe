import React,{useState} from 'react'
import './Contact.css' 
import contactcard1 from '../../assets/contactuscard1.jpg'
import contactcard2 from '../../assets/contactcard2.jpg'
import contactcard3 from '../../assets/contactcard3.jpg'
import ptick from '../../assets/ptick.png'
import star from '../../assets/starticon.png'
import chaticon from '../../assets/chatbubble.png';
import chatclose from'../../assets/chatclose.png';
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <Navbar/>
      <div className="contactheader">
        <h1>Contact Brandspark</h1>
        <p>We are available to assist you in locating the ideal support!</p>
      </div>

      <div className="contactcards">
      <div className="cardcd">
          <div className="cardcdimg">
          <img src={contactcard1} alt="" />
          </div>
          <h1>Live Support</h1>
          <p>The support team of Brandspark is available! Send an email to brandspark@mail.com or start a chat.</p>
          <button className='getclick' onClick={toggleChat}>Get Support</button>
        </div>
        <div className="cardcd">
          <div className="cardcdimg">
          <img src={contactcard2} alt="" />
          </div>
          <h1>Help Commiunity</h1>
          <p>Learn the simple tips and answers for creating logos and prmote your brand with Brandspark help community.</p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Help'><button className='getclick'>Get support</button></Link>
        </div>
        <div className="cardcd">
          <div className="cardcdimg">
          <img src={contactcard3} alt="" />
          </div>
          <h1>Join with us</h1>
          <p>Become a part of rapidly expanding organization using latest technology and design your business as an expert!</p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/expertsign'><button className='getclick'>Join </button></Link>
        </div>
      </div>

      <div className="packagelists">
        <h1>Choose BrandSpark's brand kit packages that specially made for you</h1>
        <p>Bring your brand to life with BrandSpark's packages</p>
        
        <div className="packagecards">
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
      {isChatOpen && (
        <div className="chat-frame-container">
          <div className="close-chat" onClick={toggleChat}>
                    <img src={chatclose} alt="" />
                </div>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/gmtPDB5vDCaK8XXpXdfTY"
            title="Chatbot"
            width="100%"
            style={{ height: '100%', minHeight: '500px' }}
            frameBorder="0"
          ></iframe>
        </div>
      )}

      <div className="chat-bubble" onClick={toggleChat}>
        <img src={chaticon} alt="" className='chaticon' />
      </div>
        </div>


      
   
  )
}

export default Contact
