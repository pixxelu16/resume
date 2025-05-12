import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <a href="/resume/about-page">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#gallery">GALLERY</a>
        <a href="#experimental" className="experimental-link">
          EXPERIMENTALOPS
        </a>
      </nav>
    </header>
  );
};

export default Header;
