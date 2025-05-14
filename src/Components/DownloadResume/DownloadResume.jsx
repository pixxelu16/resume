import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DownloadResume.css';
import GreyImage from '../../Assets/Images/grey-img.png'

const ResumeSection = () => {
  return (
<div className="hand-container">
  <div className="row">
    <div className="col-md-6">
      <img src={GreyImage} alt="" className="grey-img"/>
    </div>
    <div className="col-md-6 color-white d-flex flex-column justify-content-end">
      <h4 className="font-52 margin-bottom-10rem">Hello!</h4>
      <h5 className="font-52">I am Yash. I am a visual<br/> designer based in New, Delhi. </h5>
      <button className="download-button">Download Resume</button>
    </div>
  </div>
  </div>
 
  );
};

export default ResumeSection;
