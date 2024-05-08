import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import './Expert.css'
import expertbk from '../../assets/Expertpage/expertbk.png'
import pp1 from '../../assets/Expertpage/pp1.png'
import pp2 from '../../assets/Expertpage/pp2.png'
import pp3 from '../../assets/Expertpage/pp3.png'
import pp4 from '../../assets/Expertpage/pp4.png'

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
                <img src={pp3} alt="pp3" />

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
                <img src={pp4} alt="pp4" />

              </div>
              </div>
              <h2>Emma Harper</h2>
              <h3>Chief Executive Officer (CEO)</h3><br /><br />
              <h4>A visionary CEO, drives innovation and strategic growth, 
                leading teams to success with passion and determination</h4>
                <br />
                <button class="connect-button">Connect</button>
                </div>

          </div>

        </div>


        <br /><br /><br /><br />

        <Footer/>

    </div>
  )
}

export default Expert