import React from 'react';
import './MT.css';
import mockup1 from '../../../assets/BrandKit/1.png';
import mockup2 from '../../../assets/BrandKit/2.png';
import mockup3 from '../../../assets/BrandKit/3.jpg';
import mockup4 from '../../../assets/BrandKit/4.jpg';
import mockup5 from '../../../assets/BrandKit/5.png';
import mockup6 from '../../../assets/BrandKit/6.png';
import mockup7 from '../../../assets/BrandKit/7.png';
import mockup8 from '../../../assets/BrandKit/8.jpg';
import mockup9 from '../../../assets/BrandKit/9.jpg';
import { Link } from 'react-router-dom'

const MT = () => {
    const items = [
        { id: 1, title: 'Social Profiles', image: mockup1, link: '/spgenerator' },
        { id: 2, title: 'Social Posts', image: mockup2, link: '/spgenerator' },
        { id: 3, title: 'Business Cards', image: mockup3, link: '/spgenerator' },
        { id: 4, title: 'Letter Heads', image: mockup4, link: '/spgenerator' },
        { id: 5, title: 'Posters', image: mockup5, link: '/spgenerator' },
        { id: 6, title: 'Presentations', image: mockup6, link: '/spgenerator' },
        { id: 7, title: 'Invitations', image: mockup7, link: '/spgenerator' },
        { id: 8, title: 'Web Sites', image: mockup8, link: '/spgenerator' },
        { id: 9, title: 'Brochures', image: mockup9, link: '/spgenerator' }
    ];

    return (
        <div className="brandkit-container">
            <div className="brandkit-grid">
                {items.map((item, index) => (
                    <Link to={item.link} key={index} className="brandkit-item">
                        <div key={item.id} className="brandkit-item">
                            <img src={item.image} alt={item.title} className="brandkit-image" />
                            <div className="overlay">
                                <div className="overlay-text">{item.title}</div>
                            </div>
                        </div>
                   </Link>
                ))}
            </div>
        </div>
    );
};

export default MT;
