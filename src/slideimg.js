// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div className='SLIDIMGA'>
    <div className="carousel-container">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
        <div>
          <img src={require('./images/img1.png')} alt="Image 1" />
        </div>
        <div>
          <img src={require('./images/img2.png')} alt="Image 2" />
        </div>
        <div>
          <img src={require('./images/img3.png')} alt="Image 3" />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
    </div>
  );
};

export default ImageCarousel;
