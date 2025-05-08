// src/components/MindshareSection.js
import React from 'react';
import './Banner.css';
import mindshareImage from "../../Assets/Images/mindshare-banner.png" ; // Use your actual image path

const MindshareSection = () => {
  return (
    <section className="mindshare-section">
      <div className="mindshare-text">
        <p className="subtitle"><span className="">MINDSHARE</span> | LOGO AND BRANDING</p>
        <h1 className="title">
          Designing an Identity that Reflects<br />
          Collaboration, Connection, and Possibility.
        </h1>
      </div>
      <div className="mindshare-image">
        <img src={mindshareImage} alt="Mindshare visual" />
      </div>
    </section>
  );
};

export default MindshareSection;
