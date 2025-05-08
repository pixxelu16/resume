import React from "react";
import './Image.css'
import FullWidhtImage from '../../Assets/Images/infinite-img.png'


const Image = () => {
  return (
   <>
   <div className="full-width">
   <img src={FullWidhtImage } alt="" />
    </div>  
   </>
  );
};

export default Image;
