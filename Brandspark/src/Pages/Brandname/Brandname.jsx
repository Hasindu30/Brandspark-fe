import React from 'react'
import './Brandname.css'
import Navbar from '../../Components/Navbar/Navbar'

const Brandname = () => {
  return (
    <div>
      <Navbar/>
      <div className="brandnameheader">
        <h1>Design Your Own Brandname</h1>
        <p> Brandspark AI-powered platform to create your own brandname </p>
        <input className='bname' type="text" placeholder='Start typing key word or industry'/>
        <button className='getstart'>Generate Brandname</button>
      </div>

    </div>
  )
}

export default Brandname
