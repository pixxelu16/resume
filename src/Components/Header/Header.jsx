import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import ResposiveIcon from "../../Assets/Images/responsive_icon.svg"
import Experimental from "../../Assets/Images/experimental.png"

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
    <img src={ResposiveIcon} alt="" />
      </button>

      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <a href="/resume/about-page">ABOUT</a>
        <a href="/resume/project-mindset">WORK</a>
        <a href="#gallery">GALLERY</a>
        <a href="#experimental" className="experimental-link">
          <img src={Experimental} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
