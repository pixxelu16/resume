import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Concept.css';

const Concept = ({
  title = "Concept",
  image,
  imageAlt = "Concept visual",
  paragraphs = [],
  imageAnimation = "fade-right",
  textAnimation = "fade-left",
  imageDelay = 0,
  textDelay = 200,
  aosDuration = 1000,
}) => {
  useEffect(() => {
    AOS.init({ duration: aosDuration });
  }, [aosDuration]);

  return (
    <section className="Concept">
      <div className="custom-container">
        <p className="font-24 concept-line" data-aos="fade-down">{title}</p>

        <div className="row padding-top-60">
          <div className="col-md-6 concept-1" data-aos={imageAnimation} data-aos-delay={imageDelay}>
            <img src={image} alt={imageAlt} />
          </div>
          <div className="col-md-6 concept-2" data-aos={textAnimation} data-aos-delay={textDelay}>
            {paragraphs.map((para, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
