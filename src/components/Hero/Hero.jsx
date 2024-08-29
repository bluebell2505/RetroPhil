import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="image-container">
      </div>
      <div className="paddings text-container">
        <h1>RetroPhil Platform For Beginners And Expert Philatelist</h1>
        <p>
          Our marketplace is the world’s first and largest Philatelic market for stamp collectors worldwide.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Stamps, Collection, Sale"
            className="search-input"
          />
          <button className="button search-button">
            <i className="fa fa-search">Search</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
