import React from "react";
import "./Generator.css";

function Generator() {
  return (
    <div className="social-profile">
      <header className="header">
        <h1>Social media kit generator</h1>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className="content">
        <h2>Let’s create your social media kit</h2>
        <p>We will need your logo and brand colors</p>
      </div>
      <div className="options">
        <div className="option">
          <h3>I already have a logo</h3>
          <p>Choose this option if you already have a logo to use for your branded social media kit</p>
          <button className="upload-logo">Upload Logo</button>
        </div>
        <div className="option">
          <h3>Make a logo</h3>
          <p>Don’t have a logo? Use Looka’s AI-powered design platform to get a logo and build a brand you love</p>
          <button className="make-logo">Make Logo</button>
        </div>
      </div>
      <div className="image-gallery">
        <div className="image-card">
          <img src="link-to-image-1" alt="Social Media Mockup 1" />
        </div>
        <div className="image-card">
          <img src="link-to-image-2" alt="Social Media Mockup 2" />
        </div>
        <div className="image-card">
          <img src="link-to-image-3" alt="Social Media Mockup 3" />
        </div>
      </div>
    </div>
  );
}

export default Generator;
