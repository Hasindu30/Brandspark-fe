import React, { useState } from 'react';
import './Generatelogo.css';
import Emnavbar from '../../Components/Emnavbar/Emnavbar';

// Import local images
import image1 from '../../assets/logoge1.png';
import image2 from '../../assets/logoge2.png';
import image3 from '../../assets/logoge3.png';
import image4 from '../../assets/logoge4.png';
import image5 from '../../assets/logogen5.png';
import image6 from '../../assets/logogen6.png';
import image7 from '../../assets/logogen7.png';
import image8 from '../../assets/logogen8.jpeg';

const Generatelogo = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const allImages = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8],
  ];

  // Function to handle image generation with a sequential loading effect
  const handleGenerateLogo = () => {
    if (clickCount >= allImages.length) return; // Stop generating after all images are shown

    setIsLoading(true);
    const loadedImages = [];

    // Load images one by one with a delay between them
    allImages[clickCount].forEach((img, index) => {
      setTimeout(() => {
        loadedImages.push(img);
        setImages([...loadedImages]);

        // Stop the loading spinner after all images are loaded
        if (index === allImages[clickCount].length - 1) {
          setIsLoading(false);
          setClickCount(clickCount + 1);
        }
      }, (index + 1) * 1000); // 1 second delay for each image
    });
  };

  return (
    <div>
      <Emnavbar />
      <div className="logogenheader">
        <h1>Enter your Business name</h1>
        <input
          className='logogen'
          type="text"
          placeholder='Enter Your Company Name'
        />
        <button className='getstart' onClick={handleGenerateLogo}>
          Create logo
        </button>
      </div>

      <div className="image-gallery">
        {isLoading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <div className="images-container">
            {images.length > 0 && images.map((img, index) => (
              <img key={index} src={img} alt={`Generated logo ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Generatelogo;
