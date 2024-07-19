import React from 'react'
import './Brandname.css'
import Navbar from '../../Components/Navbar/Navbar'

const Brandname = () => {
  return (
    <div>
      <Navbar/>
      <div className="brandnameheader">
        <h1>Design your own brand name</h1>
        <p> Brandspark AI-powered platform to create your own brand name </p>
        <input className='bname' type="text" placeholder='Start typing key word or industry'/>
        <button className='getstart'>Generate brand name</button>
      </div>

    </div>
  )
}

export default Brandname
