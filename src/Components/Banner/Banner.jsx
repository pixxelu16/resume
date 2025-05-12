// src/components/MindshareSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';
import mindshareImage from "../../Assets/Images/mindshare-banner.png";

const MindshareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mindshare-section">
      <div className="mindshare-text" data-aos="fade-up">
        <p className="subtitle">
          <span>MINDSHARE</span> | LOGO AND BRANDING
        </p>
        <h1 className="title">
          Designing an Identity that Reflects<br />
          Collaboration, Connection, and Possibility.
        </h1>
      </div>
      <div className="mindshare-image" data-aos="fade-down">
        <img src={mindshareImage} alt="Mindshare visual" />
      </div>
    </section>
  );
};

export default MindshareSection;
