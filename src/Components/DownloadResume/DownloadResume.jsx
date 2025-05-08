import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DownloadResume.css'; 

const ResumeSection = () => {
  return (
    <div className="position-relative bg-dark text-white py-5 overflow-hidden">
      
      {/* Hand Image in Background */}
      <div
        className="position-absolute top-0 end-0 bg-hand"
        style={{
          width: '250px',
          height: '250px',
          backgroundImage: "url('/hand.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0"> 
            <div style={{ width: '240px', height: '320px', backgroundColor: '#ccc' }}></div>
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-semibold mb-3">Hello!</h2>
            <p className="fs-4 fw-bold mb-4">
              I am Yash. I am a visual designer based in New Delhi.
            </p>
            <button className="btn btn-warning fw-semibold px-4 py-2">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
