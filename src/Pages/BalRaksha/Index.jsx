import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import BalRakshaBaner from '../../Assets/Images/Bal-raksha-banner.png';
import BalrakshaGrey from '../../Assets/Images/Balraksha-grey-banner.png';
import FanPic from '../../Assets/Images/fan-pic.png';
import Fan1 from '../../Assets/Images/fan-1.png';
import Fan2 from '../../Assets/Images/fan-2.png';
import Fan3 from '../../Assets/Images/fan-3.png';
import Fan4 from '../../Assets/Images/fan-4.png';
import './Index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectMindSet = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const leftContent = (
    <div data-aos="fade-right">
      <div className="mb-4">
        <h5>Nature</h5>
        <p>Pitched to Client<br />
          (Internship @Clay Design Strategy)</p>
      </div>
      <div>
        <h5>Roles:</h5>
        <p>Research </p>
        <p>Logo Design</p>
        <p>Visual Design</p>

      </div>
    </div>
  );

  const conceptParagraphs = [
    `Introducing Trekkit, designed to enhance your outdoor adventures! Discover upcoming treks from hostels and agencies. Easily find or create trekking groups based on your preferences and connect with like-minded adventurers. Support local businesses by renting or buying gear nearby.`,
  ];

  const rightContent = (
    <div data-aos="fade-left">
      <h4>Brief:</h4>
      <p>
        This project was one of the few routes presented to Bal Raksha Bharat for their rebranding, done in 2022 by Clay Design Strategy
        (Mumbai). This was part of work I did as internship at Clay Design.
      </p>
      <p>
        The goal for this re-branding was to look like a more Indian NGO (It being the Indian brand of Save the Children International)
        and create visuals that resonate more with the people. They wanted an identity that is distinctive and optimistic, to be used
        seamlessly in their campaigns throughout the country.
      </p>
    </div>
  );

  return (
    <div className="trekkit-page">
      <Header />
      <Banner
        subtitle="BAL RAKSHA BHARAT | LOGO AND BRANDING"
        title={`An Identity that Embodies Holistic <br/>Development and Child Rights Protection.`}
        imageSrc={BalRakshaBaner}
        imageAlt="Trekkit visual"
        textAnimation="fade-up"
        imageAnimation="fade-down"
      />
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />

      <Image
        src={BalrakshaGrey}
        alt="Trekkit showcase image 1"
        animation="fade-up"
        className="custom-style"
        duration={1500}
      />
      <div className='balraksha-concept'>
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <img src={FanPic} alt="" className='fan-pic'/>
            </div>
            <div className="col-md-6">
              <div className='d-flex fan-p font-24 weight-300'>
                <p>The pinwheel, a universal symbol of childhood, embodies the joy, innocence, and limitless potential of
                  every child. Its playful nature reflects the optimism and positivity that Bal Raksha Bharat stands for while also representing change. </p>
                <p> The pinwheel is designed to be a recognizable symbol of child protection and advocacy. It reflects a collective
                  commitment to safeguarding children and empowering them to grow in safe, supportive environments.</p>
              </div>
              <div className='fan-sub' >
                <div>
                  <img src={Fan1} alt="" />
                  <p>Education</p>
                </div>
                <div>
                  <img src={Fan2} alt="" />
                  <p>Protection</p>
                </div>
                <div>
                  <img src={Fan3} alt="" />
                  <p>Nutrition<br /> & Health</p>
                </div>
                <div>
                  <img src={Fan4} alt="" />
                  <p>Inclusion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div data-aos="fade-up">
        <ProjectSlider />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectMindSet;
