import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import Collage from '../../Components/Collage/Collage';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import mindshareImage from "../../Assets/Images/mindshare-banner.png";

const ProjectMindSet = () => {
  const leftContent = (
    <>
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
    </>
  );

  const rightContent = (
    <>
      <h4>Brief:</h4>
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
    </>
  );

  return (
    <>
      <Header />
      <Banner
        subtitle="MINDSHARE | LOGO AND BRANDING"
        title={`Designing an Identity that Reflects<br />Collaboration, Connection, and Possibility.`}
        imageSrc={mindshareImage}
        imageAlt="Mindshare visual"
        textAnimation="fade-up"
        imageAnimation="fade-down"
      />
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />
      <Image />
      <Concept />
      <Collage />
      <ProjectSlider />
      <Footer />
    </>
  );
};

export default ProjectMindSet;
