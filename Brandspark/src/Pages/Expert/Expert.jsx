import React from 'react'
import './Expert.css'
import { Link } from 'react-router-dom'
import expertbk from '../../assets/Expertpage/expertbk.png'
import pp1 from '../../assets/Expertpage/pp1.png'
import pp2 from '../../assets/Expertpage/pp2.png'
import pp3 from '../../assets/Expertpage/pp3.png'
import pp4 from '../../assets/Expertpage/pp4.png'
import pp5 from '../../assets/Expertpage/pp5.png'
import pp6 from '../../assets/Expertpage/pp6.png'
import pp7 from '../../assets/Expertpage/pp7.png'
import pp8 from '../../assets/Expertpage/pp8.png'
import Navbar from '../../Components/Navbar/Navbar'

const Expert = () => {
  return (
    <div>
      <Navbar></Navbar>
        <div className='toptext'>
            <ul>
                <li><h1><span className='text'> Your Gateway to Business Brilliance</span><br /><br />
                Connect with Industry Titans! Elevate your brand with expert advice, innovative strategies, 
                    and game-changing insights. 
                    Dive into a world of endless possibilities and amplify your business today!</h1>
                <li><img src={expertbk} alt="expertbk" /></li>
                </li>
            </ul>
        </div>
       
        <div className='cbody'><br />
          <h1><span>Connect Now With Our Experts</span></h1>
          <div className='anime'><br /><br />
            <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp1} alt="pp1" />

              </div>
              </div>
              <h2>Emma Harper</h2>
              <p>Chief Executive Officer (CEO)</p>
              <h4>A visionary CEO, drives innovation and strategic growth, 
                leading teams to success with passion and determination</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>

                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp2} alt="pp2" />

              </div>
              </div>
              <h2>Rose Keren</h2>
              <p>Brand Strategist & Business Analyst</p>
              <h4>Innovative strategist blending analytics & creativity, 
                shaping brands for lasting market impact.</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp5} alt="pp5" />

              </div>
              </div>
              <h2>Michael Chang</h2>
              <p>Senior Brand Consultant</p>
              <h4>Seasoned consultant decoding consumer behavior, 
                driving brand growth with strategic insights.</h4>
                <br /><br />
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp4} alt="pp4" />

              </div>
              </div>
              <h2>Emily Rodriguez</h2>
              <p>Marketing Analytics Specialist</p>
              <h4>Data-driven specialist decoding market trends, 
                optimizing campaigns for tangible results.</h4>
                <br /><br />
                <button class="connect-button">Connect</button>
                </div>

          </div>

          


          <div className='anime'><br /><br />
            <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp3} alt="pp3" />

              </div>
              </div>
              <h2>Jessica Barnes</h2>
              <p>Digital Marketing Strategist & Analyst</p>
              <h4>Digital maven crafting data-driven strategies, driving 
                engagement and conversions across channels.</h4>
                
                <button class="connect-button">Connect</button>
                </div>

                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp6} alt="pp6" />

              </div>
              </div>
              <h2>Daniel Wright</h2>
              <p>Brand Strategy Consultant</p>
              <h4>Strategic thinker crafting innovative brand strategies, 
                resonating with target audiences for success.</h4>
                
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp7} alt="pp7" />

              </div>
              </div>
              <h2>Ryan Johnson</h2>
              <p>Business Intelligence Manager</p>
              <h4>Data expert translating insights into strategic decisions, 
                unlocking opportunities for sustainable growth</h4>
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp8} alt="pp8" />

              </div>
              </div>
              <h2>Marcus Reynolds</h2>
              <p>Business Development Analyst</p>
              <h4> Analytical thinker identifying growth opportunities, developing 
                strategies to expand businesses into new markets.</h4>
                
                <button class="connect-button">Connect</button>
                </div>

          </div>

        </div>
        <div className="onlineexpert">
          <br />
          <h1>Get start analyze your business <br/>with online expert </h1> <br /> <br />
          <p>Use Brandspark's AI-powered experts and get help to 
            optimize your marketing strategies, enhance your brand 
            identity, or streamline your operations, Brandspark online experts are here
          </p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/onlinegpt'><button className='onlinehelp'>Get Help Now</button></Link>
        </div>

        <div className='bottomtext'>
            <ul>
                <li><h1><span className='text'>We Help to Choose a Best Expert For You</span><br /><br /></h1>
                <p>BrandSpark ensures you find the ideal expert to meet your brand's unique needs, 
                guiding you towards strategic excellence and sustainable growth.</p>
                
                <h2>Contact with us</h2>
                <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Contact'><button className='getstart'>Get started</button></Link>

                </li>
            </ul></div><br /><br /><br />
            
        
        


        

    </div>
  )
}

export default Expert