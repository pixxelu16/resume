import React from "react";
import './Footer.css'
import Experimental from "../../Assets/Images/experimental.png"

const Footer = () => {
    return (
        <footer>
            <h3 className="font-74 color-white">LETS BUILD SOMETHING COOL TOGETHER : )</h3>
            <div className="footer-link">
                <a href="#about">ABOUT</a>
                <a href="#work">WORK</a>
                <a href="#gallery">GALLERY</a>
                <a href="#experimental" className="experimental-link">
                    <img src={Experimental} alt="" className="experimental-img" />
                </a>
            </div>
            <div className="footet-social">
                <h5 className="color-purple font-36">Contact</h5><br/>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">GMail</a>
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            </div>
        </footer>
    );
};

export default Footer;
