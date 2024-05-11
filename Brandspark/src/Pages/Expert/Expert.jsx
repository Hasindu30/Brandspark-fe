import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import './Expert.css'
import expertbk from '../../assets/Expertpage/expertbk.png'
import pp1 from '../../assets/Expertpage/pp1.png'
import pp2 from '../../assets/Expertpage/pp2.png'
import pp3 from '../../assets/Expertpage/pp3.png'
import pp4 from '../../assets/Expertpage/pp4.png'
import pp5 from '../../assets/Expertpage/pp5.png'
import pp6 from '../../assets/Expertpage/pp6.png'
import pp7 from '../../assets/Expertpage/pp7.png'
import pp8 from '../../assets/Expertpage/pp8.png'

const Expert = () => {
  return (
    <div>
        <Navbar/>
        <div className='toptext'>
            <ul>
                <li><h1><span className='text'>Expertize Avenue: Your Gateway to Business Brilliance</span><br /><br />
                Unlock Success: Connect with Industry Titans! Elevate your brand with expert advice, innovative strategies, 
                    and game-changing insights. 
                    Dive into a world of endless possibilities and amplify your business today!</h1>
                <li><img src={expertbk} alt="expertbk" /></li>
                </li>
            </ul>
        </div>
        <br /><br /><br />

        <div className='cbody'><br />
          <h1><span>Connect  Now With Our Experts</span></h1>
          <div className='anime'><br /><br />
            <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp1} alt="pp1" />

              </div>
              </div>
              <h2>Emma Harper</h2>
              <h3>Chief Executive Officer (CEO)</h3><br /><br />
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
              <h3>Brand Strategist & Business Analyst</h3><br /><br />
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
              <h3>Senior Brand Consultant</h3><br /><br />
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
              <h3>Marketing Analytics Specialist</h3><br /><br />
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
              <h3>Digital Marketing Strategist & Analyst</h3><br /><br />
              <h4>Digital maven crafting data-driven strategies, driving 
                engagement and conversions across channels.</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>

                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp6} alt="pp6" />

              </div>
              </div>
              <h2>Daniel Wright</h2>
              <h3>Brand Strategy Consultant</h3><br /><br />
              <h4>Strategic thinker crafting innovative brand strategies, 
                resonating with target audiences for success.</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp7} alt="pp7" />

              </div>
              </div>
              <h2>Ryan Johnson</h2>
              <h3>Business Intelligence Manager</h3><br /><br />
              <h4>Data expert translating insights into strategic decisions, 
                unlocking opportunities for sustainable growth</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>


                <div className='card'>
              <div className='ctext'>
              <div className='cphoto'>
                <img src={pp8} alt="pp8" />

              </div>
              </div>
              <h2>Marcus Reynolds</h2>
              <h3>Business Development Analyst</h3><br />
              <h4> Analytical thinker identifying growth opportunities, developing 
                strategies to expand businesses into new markets.</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>

          </div>

        </div>

        <div className='bottomtext'>
            <ul>
                <li><h1><span className='text'>We Help to Choose a Best Expert <br /> For You</span><br /><br />
                BrandSpark ensures you find the ideal expert to meet your brand's unique needs, 
                guiding you towards strategic excellence and sustainable growth.</h1>
                <br />
                <h2>Contact with us</h2>

                </li>
            </ul></div><br /><br /><br />
            <div className='button'>
              <ul>
                <li><input className='message' type="text" placeholder='       Message'/></li>
                <li><button className='send'>send</button></li>
                </ul>
            </div>
        <br /><br /><br />

        

        <br /><br /><br /><br />

        <Footer/>

    </div>
  )
}

export default Expert