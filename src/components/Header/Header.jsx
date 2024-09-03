import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownMenus = {
    FDC: (
      <div className="dropdown-content">
        <div className="left-section">
          <img src="FDC.png" alt="FDC Variety" />
          <h2>FDC Variety</h2>
          <button>DISCOVER</button>
        </div>
        <div className="right-section">
          <div className="dropdown-category">
            <h3>Category</h3>
            <a href="#">First Day Covers</a>
            <a href="#">Miniature on FDC</a>
            <a href="#">PLace Cancellation</a>
            <a href="#">Special Cover</a>
            <a href="#">FDC Commercial Used</a>
          </div>
          <div className="dropdown-category">
            <h3>Subject</h3>
            <a href="#abstract">Abstract</a>
            <a href="#cityscape">Cityscape</a>
            <a href="#genre">Genre</a>
            <a href="#historical">Historical</a>
            <a href="#landscape">Landscape</a>
            <a href="#more-subjects">More Fine Art Subjects</a>
          </div>
          <div className="dropdown-category">
            <h3>Style</h3>
            <a href="#academic">Academic</a>
            <a href="#baroque">Baroque</a>
            <a href="#modern">Modern</a>
            <a href="#oldmasters">Old Masters</a>
            <a href="#post-impressionist">Post-Impressionist</a>
            <a href="#more-styles">More Fine Art Styles</a>
          </div>
        </div>
      </div>
    ),
    definitive: (
      <div className="dropdown-content">
        <div className="left-section">
          <img src="DefinitiveStamp.png" alt="Definitive" />
          <h2>DEFINITIVE</h2>
          <button>EXPLORE</button>
        </div>
        <div className="right-section">
          <div className="dropdown-category">
            <h3>Category</h3>
            <a href="#modern">Definitive Stamp</a>
            <a href="#historical">Definitive Block</a>
            <a href="#collections">Number Strips</a>
            <a href="#collections">Definitive Sheet</a>

          </div>
         
          <div className="dropdown-category">
            <h3>Era</h3>
            <a href="#prewar">Pre-War</a>
            <a href="#postwar">Post-War</a>
            <a href="#contemporary">Contemporary</a>
          </div>
        </div>
      </div>
    ),
    stationary: (
      <div className="dropdown-content">
        <div className="left-section">
          <img src="envolope.jpg" alt="Stationary" />
          <h2>STATIONARY</h2>
          <button>EXPLORE</button>
        </div>
        <div className="right-section">
          <div className="dropdown-category">
            <h3>Type</h3>
            <a href="#envelopes">Envelopes</a>
            <a href="#cards">Cards</a>
            <a href="#paper">Writing Paper</a>
            <a href="#more">More Stationary</a>
          </div>
          <div className="dropdown-category">
            <h3>Collections</h3>
            <a href="#seasonal">Seasonal</a>
            <a href="#luxury">Luxury</a>
            <a href="#everyday">Everyday</a>
          </div>
          <div className="dropdown-category">
            <h3>Brands</h3>
            <a href="#brand1">Brand 1</a>
            <a href="#brand2">Brand 2</a>
            <a href="#brand3">Brand 3</a>
          </div>
        </div>
      </div>
    ),
    stamps: (
      <div className="dropdown-content">
        <div className="left-section">
          <img src="letters.png" alt="Stamps" />
          <h2>STAMPS</h2>
          <button>DISCOVER</button>
        </div>
        <div className="right-section">
          <div className="dropdown-category">
            <h3>Category</h3>
            <a href="#firstday">First Day Covers</a>
            <a href="#commemorative">Commemorative</a>
            <a href="#definitive">Definitive</a>
            <a href="#more">More Stamps</a>
          </div>
          <div className="dropdown-category">
            <h3>Country</h3>
            <a href="#usa">USA</a>
            <a href="#india">India</a>
            <a href="#uk">UK</a>
            <a href="#japan">Japan</a>
          </div>
          <div className="dropdown-category">
            <h3>Era</h3>
            <a href="#pre1950">Pre-1950</a>
            <a href="#1950to2000">1950-2000</a>
            <a href="#modern">Modern</a>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-info">
          <a href="#" className="logo">
            <img src="logo.png" alt="Logo" />
          </a>
        </div>

        <div className="account-options">
          <a href="#wishlist">Create Wishlist</a>
          <Link to="/signup" className="button sign-up-button">
            Sign Up
          </Link>
          <a href="#shoppingbag" className="shopping-bag">
            Shopping Bag <i className="fas fa-shopping-bag"></i>
          </a>
        </div>
      </div>

      <div className="flexCenter header-main">
        <nav className="nav-links">
          <a
            href="#fineart"
            onMouseEnter={() => handleMouseEnter("FDC")}
          >
            FDC VARIETY
          </a>
          <a
            href="#"
            onMouseEnter={() => handleMouseEnter("definitive")}
          >
            DEFINITIVE
          </a>
          <a
            href="#jewelry"
            onMouseEnter={() => handleMouseEnter("stationary")}
          >
            STATIONARY
          </a>
          <a
            href="#library"
            onMouseEnter={() => handleMouseEnter("stamps")}
          >
            STAMPS
          </a>
          <a href="#about">ABOUT US</a>
        </nav>
      </div>

      {activeDropdown && (
        <div
          className="dropdown-menu"
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          {dropdownMenus[activeDropdown]}
        </div>
      )}
    </header>
  );
};

export default Header;
