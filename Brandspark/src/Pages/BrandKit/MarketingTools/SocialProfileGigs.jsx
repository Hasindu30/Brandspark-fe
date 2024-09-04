import React from 'react';
import './SocialProfileGigs.css';
import Navbar from '../../../Components/Navbar/Navbar'

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
    image: gigImg1,
    seller: 'Sarah S',
    badge: 'Top Rated',
    title: 'I will be your agency facebook and instagram ads manager',
    rating: '4.9 (448)',
    price: 'From $300',
    consultations: 'Offers video consultations',
    link: '/designer' 
  },
  {
    id: 2,
    title: "I will create social media business pages",
    rating: '4.9 (1k+)',
    price: 'From $450',
    seller: "Murray Swift",
    image: gigImg2,
    badge: "",
    link: '/designer' 
  },
  {
    id: 3,
    title: "I will create your professional instagram content strategy",
    rating: '4.9 (315)',
    price: 'From $320',
    seller: "Sara And Alba",
    image: gigImg3,
    badge: "",
    link: '/designer' 
  },
  {
    id: 4,
    title: "I will be your social media marketing manager",
    rating: '4.9 (1k+)',
    price: 'From $295',
    seller: "Elif A.",
    image: gigImg4,
    badge: "",
    consultations: 'Offers video consultations',
    link: '/designer' 
  },
  {
    id: 5,
    title: "I will design eye-catching social media posts",
    rating: '5.0 (112)',
    price: 'From $200',
    seller: "Liam P.",
    image: gigImg5,
    badge: "",
    link: '/designer' 
  },
  {
    id: 6,
    title: "I will manage your social media accounts",
    rating: '4.8 (528)',
    price: 'From $350',
    seller: "Olivia W.",
    image: gigImg6,
    badge: "Top Rated",
    consultations: 'Offers video consultations',
    link: '/designer' 
  },
  {
    id: 7,
    title: "I will create a social media content calendar",
    rating: '4.7 (762)',
    price: 'From $180',
    seller: "Noah B.",
    image: gigImg7,
    badge: "",
    link: '/designer' 
  },
  {
    id: 8,
    title: "I will write engaging social media copy",
    rating: '4.9 (345)',
    price: 'From $260',
    seller: "Emma K.",
    image: gigImg8,
    badge: "",
    consultations: 'Offers video consultations',
    link: '/designer' 
  },
  {
    id: 9,
    title: "I will design a professional social media banner",
    rating: '5.0 (412)',
    price: 'From $150',
    seller: "James T.",
    image: gigImg9,
    badge: "",
    link: '/designer' 
  },
  {
    id: 10,
    title: "I will help you grow your social media following",
    rating: '4.8 (589)',
    price: 'From $320',
    seller: "Isabella M.",
    image: gigImg10,
    badge: "",
    link: '/designer' 
  },
  {
    id: 11,
    title: "I will create custom social media graphics",
    rating: '4.9 (276)',
    price: 'From $220',
    seller: "Mason H.",
    image: gigImg11,
    badge: "Top Rated",
    consultations: 'Offers video consultations',
    link: '/designer' 
  },
  {
    id: 12,
    title: "I will optimize your social media profiles",
    rating: '4.9 (132)',
    price: 'From $280',
    seller: "Sophia R.",
    image: gigImg12,
    badge: "",
    link: '/designer' 
  }
];

const SocialProfileGigs = () => {
  return (
    <div className="social-profile-gigs-page">
      <Navbar></Navbar>
      <div className="results">93,000+ results</div>
      <div className="gigs-list">
        {gigsData.map(gig => (
          <Link to={gig.link} key={gig.id} className="gig-card">
            <img src={gig.image} alt={gig.title} className="gig-image" />
            <div className="gig-details">
              <div>
                <span className="gig-seller">Ad by {gig.seller}</span>
                {gig.badge && <span className="badge">{gig.badge}</span>}
              </div>
              <div className="gig-title">{gig.title}</div>
              <div className="gig-rating">{gig.rating}</div>
              <div className="gig-price">{gig.price}</div>
              {gig.consultations && <div className="video-consultation">{gig.consultations}</div>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialProfileGigs;
