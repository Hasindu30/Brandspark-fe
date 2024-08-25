import React from 'react';
import './Designer.css';
import gigPost from '../../../assets/BrandKit/SP/1.jpg';
import gigProf from '../../../assets/BrandKit/Sara.jpeg';
import { Link } from 'react-router-dom';

const Designer= () => {
  return (
<div className="container">
            <div className="header">
                <div className="profile">
                    <img src="profile-picture.jpg" alt="Designer Profile Picture" />
                </div>
                <h1>Designer Gig Page</h1>
            </div>

            <img src="gig-poster.jpg" alt="Gig Poster" className="gig-poster" />

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
                <img src="work1.jpg" alt="Work 1" />
                <img src="work2.jpg" alt="Work 2" />
                <img src="work3.jpg" alt="Work 3" />
                <img src="work4.jpg" alt="Work 4" />
                <img src="work5.jpg" alt="Work 5" />
                <img src="work6.jpg" alt="Work 6" />
            </div>

            <div className="rating-widget">
                <div className="client-review">
                    <img src="client1.jpg" alt="Client 1" />
                    <div>
                        <span className="name">John Doe</span>
                        <span className="rating">★★★★★</span>
                        <span className="comment">Amazing work! The designs exceeded my expectations.</span>
                    </div>
                </div>

                <div className="client-review">
                    <img src="client2.jpg" alt="Client 2" />
                    <div>
                        <span className="name">Jane Smith</span>
                        <span className="rating">★★★★☆</span>
                        <span className="comment">Great experience, will definitely hire again.</span>
                    </div>
                </div>

                <div className="client-review">
                    <img src="client3.jpg" alt="Client 3" />
                    <div>
                        <span className="name">Michael Brown</span>
                        <span className="rating">★★★★★</span>
                        <span className="comment">Professional and creative. Highly recommend.</span>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Designer;
