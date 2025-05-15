// src/components/ProjectBrief.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

const ProjectBrief = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="my-5 text-white project-brief">
      <div className="custom-container">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4 project-1" data-aos="fade-up">
          <div className="mb-4">
            <h5>Nature</h5>
            <p>Pitched to Client</p>
            <p><em>(Internship @Clay Design Strategy)</em></p>
          </div>
          <div>
            <h5>Roles:</h5>
            <p>Research</p>
            <p>Logo Design</p>
            <p>Visual Design</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 project-2" data-aos="fade-up" data-aos-delay="200">
          <h4 className="">Brief:</h4>
          <p>
            The client approached us to build an identity for a platform centered on collaboration,
            long-term impact, and shared growth. The aim was to communicate how meaningful partnerships
            can create lasting change—starting from a single idea and expanding outward.
          </p>
          <p>
            They wanted a system that felt open, inclusive, and dynamic—something that could visually represent
            the belief that impact grows when people come together with a shared purpose. The concept needed to speak
            to continuous evolution, mutual growth, and the strength found in unity.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectBrief;
