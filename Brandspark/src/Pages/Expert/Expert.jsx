import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer'
import './Expert.css'
import expertbk from '../../assets/Expertpage/expertbk.png'

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
        <br /><br /><br /><br /><br />

        <Footer/>

    </div>
  )
}

export default Expert