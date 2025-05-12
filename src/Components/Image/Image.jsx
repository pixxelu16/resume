import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Image.css';
import FullWidhtImage from '../../Assets/Images/infinite-img.png';

const Image = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="full-width" data-aos="zoom-in">
      <img src={FullWidhtImage} alt="Infinite visual" />
    </div>
  );
};

export default Image;
