import React from "react";
import "./Generator.css";
import { Link } from "react-router-dom";

function Generator() {
  return (
    <div className="social-profile">
      <header className="header">
        <center>
        <h1>Build your social media kit</h1>
        </center>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      
      <div className="options">
        <div className="option">
          <h3>I already have a logo</h3>
          <p>Choose this option if you already have a logo to use for your branded social media kit</p>
          <Link style={{textDecoration:'none',fontFamily:'inherit',color:'#5340ff',}} to='/spgigs'>
          <button className="upload-logo">Upload Logo</button>
          </Link>
        </div>
        <div className="option">
          <h3>I don't have a Logo</h3>
          <p>Don’t have a logo? Use Looka’s AI-powered design platform to get a logo and build a brand you love</p>
          <Link>
          </Link>
          <button className="make-logo">Make Logo</button>
        </div>
      </div>
      
    </div>
  );
}

export default Generator;
