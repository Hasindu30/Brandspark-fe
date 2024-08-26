import React from 'react';
import './SocialProfileGigs.css';

import gigImg1 from "../../../assets/BrandKit/SP/9.png";
import gigImg2 from "../../../assets/BrandKit/SP/10.png";
import gigImg3 from "../../../assets/BrandKit/SP/11.png";
import gigImg4 from "../../../assets/BrandKit/SP/12.png";
import gigImg5 from "../../../assets/BrandKit/SP/13.png";
import gigImg6 from "../../../assets/BrandKit/SP/14.png";
import gigImg7 from "../../../assets/BrandKit/SP/15.png";
import gigImg8 from "../../../assets/BrandKit/SP/16.png";
import gigImg9 from "../../../assets/BrandKit/SP/17.png";
import gigImg10 from "../../../assets/BrandKit/SP/18.png";
import gigImg11 from "../../../assets/BrandKit/SP/19.png";
import gigImg12 from "../../../assets/BrandKit/SP/20.png";

import { Link } from 'react-router-dom';

const gigsData = [
  {
    id: 1,
    title: "I will be your agency facebook and instagram ads manager",
    rating: 4.9,
    reviews: 448,
    price: 300,
    seller: "Sarah S",
    image: gigImg1,
    badge: "Top Rated",
    pro: false,
    videoConsultation: true
  },
  {
    id: 2,
    title: "I will create social media business pages",
    rating: 4.9,
    reviews: "1k+",
    price: 450,
    seller: "Murray Swift",
    image: gigImg2,
    badge: "",
    pro: true,
    videoConsultation: false
  },
  {
    id: 3,
    title: "I will create your professional instagram content strategy",
    rating: 4.9,
    reviews: 315,
    price: 320,
    seller: "Sara And Alba",
    image: gigImg3,
    badge: "",
    pro: true,
    videoConsultation: false
  },
  {
    id: 4,
    title: "I will be your social media marketing manager",
    rating: 4.9,
    reviews: "1k+",
    price: 295,
    seller: "Elif A.",
    image: gigImg4,
    badge: "",
    pro: true,
    videoConsultation: true
  },
  {
    id: 5,
    title: "I will design eye-catching social media posts",
    rating: 5.0,
    reviews: 112,
    price: 200,
    seller: "Liam P.",
    image: gigImg5,
    badge: "",
    pro: false,
    videoConsultation: false
  },
  {
    id: 6,
    title: "I will manage your social media accounts",
    rating: 4.8,
    reviews: 528,
    price: 350,
    seller: "Olivia W.",
    image: gigImg6,
    badge: "Top Rated",
    pro: true,
    videoConsultation: true
  },
  {
    id: 7,
    title: "I will create a social media content calendar",
    rating: 4.7,
    reviews: 762,
    price: 180,
    seller: "Noah B.",
    image: gigImg7,
    badge: "",
    pro: false,
    videoConsultation: false
  },
  {
    id: 8,
    title: "I will write engaging social media copy",
    rating: 4.9,
    reviews: 345,
    price: 260,
    seller: "Emma K.",
    image: gigImg8,
    badge: "",
    pro: true,
    videoConsultation: true
  },
  {
    id: 9,
    title: "I will design a professional social media banner",
    rating: 5.0,
    reviews: 412,
    price: 150,
    seller: "James T.",
    image: gigImg9,
    badge: "",
    pro: false,
    videoConsultation: false
  },
  {
    id: 10,
    title: "I will help you grow your social media following",
    rating: 4.8,
    reviews: 589,
    price: 320,
    seller: "Isabella M.",
    image: gigImg10,
    badge: "",
    pro: true,
    videoConsultation: false
  },
  {
    id: 11,
    title: "I will create custom social media graphics",
    rating: 4.9,
    reviews: 276,
    price: 220,
    seller: "Mason H.",
    image: gigImg11,
    badge: "Top Rated",
    pro: false,
    videoConsultation: true
  },
  {
    id: 12,
    title: "I will optimize your social media profiles",
    rating: 4.9,
    reviews: 132,
    price: 280,
    seller: "Sophia R.",
    image: gigImg12,
    badge: "",
    pro: true,
    videoConsultation: false
  }
];

const SocialProfileGigs = () => {
  return (
    
    <div className="social-profile-gigs-page">
      <div className="results">93,000+ results</div>
      <div className="gigs-list">
        {gigsData.map(gig => (
          <div key={gig.id} className="gig-card">
            <img src={gig.image} alt={gig.title} className="gig-image" />
            <div className="gig-details">
              <span className="gig-seller">
                Ad by {gig.seller} {gig.badge && <span className="badge">{gig.badge}</span>}
              </span>
              <h3 className="gig-title">{gig.title}</h3>
              <div className="gig-rating">
                <span>⭐ {gig.rating} ({gig.reviews})</span>
              </div>
              <div className="gig-price">
                From ${gig.price}
              </div>
              {gig.videoConsultation && <div className="video-consultation">Offers video consultations</div>}
              {/* {gig.pro && <div className="pro-badge">Pro</div>} */}
            </div>
          </div>
        ))}
      </div>
    </div>
      );
}

export default SocialProfileGigs;
