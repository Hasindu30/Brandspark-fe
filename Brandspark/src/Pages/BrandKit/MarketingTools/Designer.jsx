import React from 'react';
import './Designer.css';
import gigPost from '../../../assets/BrandKit/Designer/8.png';
import gigProf from '../../../assets/BrandKit/Sara.jpeg';
import { Link } from 'react-router-dom';
import work1 from '../../../assets/BrandKit/Designer/1.png';
import work2 from '../../../assets/BrandKit/Designer/2.png';
import work3 from '../../../assets/BrandKit/Designer/3.png';
import work4 from '../../../assets/BrandKit/Designer/4.png';
import work5 from '../../../assets/BrandKit/Designer/5.png';
import work6 from '../../../assets/BrandKit/Designer/6.png';
import profile1 from '../../../assets/BrandKit/Designer/profile1.jpg'
import profile2 from '../../../assets/BrandKit/Designer/profile2.jpg'
import profile3 from '../../../assets/BrandKit/Designer/profile3.jpg'
import Navbar from '../../../Components/Navbar/Navbar'


const Designer= () => {
  return (
<div>
<div className="container">
    <Navbar></Navbar>
            <div className="header">
                <div className="profile">
                    <img src={gigProf} alt="Designer Profile Picture" />
                </div>
                <h1>Sara Fernando</h1>
            </div>

            <img src={gigPost} alt="Gig Poster" className="gig-poster" />

            <h2>Creative Design Services</h2>
            <p className="description">
                I'm an experienced graphic designer specializing in creating stunning visual content for brands.
                From logos to social media graphics, I provide high-quality design solutions tailored to your needs.
                Let's work together to bring your ideas to life.
            </p>

            <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/orderform'>
                <button className="hire-button">Hire Now</button>
            </Link>

            <div className="gallery">
                <img src={work1} alt="Work 1" />
                <img src={work2} alt="Work 2" />
                <img src={work3} alt="Work 3" />
                <img src={work4} alt="Work 4" />
                <img src={work5} alt="Work 5" />
                <img src={work6} alt="Work 6" />
            </div>

            <div className="rating-widget">
                <div className="client-review">
                    <img src={profile1} alt="Client 1" />
                    <div>
                        <span className="name">John Doe</span>
                        <span className="rating">★★★★★</span>
                        <span className="comment">Amazing work! The designs exceeded my expectations.</span>
                    </div>
                </div>

                <div className="client-review">
                    <img src={profile2} alt="Client 2" />
                    <div>
                        <span className="name">Jane Smith</span>
                        <span className="rating">★★★★☆</span>
                        <span className="comment">Great experience, will definitely hire again.</span>
                    </div>
                </div>

                <div className="client-review">
                    <img src={profile3} alt="Client 3" />
                    <div>
                        <span className="name">Michael Brown</span>
                        <span className="rating">★★★★★</span>
                        <span className="comment">Professional and creative. Highly recommend.</span>
                    </div>
                </div>
            </div>
        </div>
</div>

  );
};

export default Designer;
