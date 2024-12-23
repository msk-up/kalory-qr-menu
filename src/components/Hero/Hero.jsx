import React from 'react';
import './Hero.css';
import kaloryco_logo from '../../assets/kaloryco_logo.svg';
import tantunabi from '../../assets/tantunabi.webp';
import restaurant_image from '../../assets/restaurant_image.webp';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={kaloryco_logo} alt="Kalory Logo" />
        </div>
        <div className="hero-slider">
        <div className="overlay"></div>
          <img
            className="hero-image"
            src={restaurant_image}
            alt="Restaurant Interior"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;