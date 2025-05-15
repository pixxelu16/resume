import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceCard.css';

import Icon1 from '../../Assets/Images/Service-icon-1.png';
import Icon2 from '../../Assets/Images/Service-icon-2.png';
import Icon3 from '../../Assets/Images/Service-icon-3.png';
import Icon4 from '../../Assets/Images/Service-icon-4.png';

const services = [
  {
    number: '01.',
    title: (
      <>
        Brand <br /> Development
      </>
    ),
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon1,
    bg: '#F3B3D8',
  },
  {
    number: '02.',
    title: (
      <>
        UI/UX <br /> Design
      </>
    ),
    desc: 'User Interfaces, Wireframes, Prototypes, and Web/App Design',
    icon: Icon2,
    bg: '#D1E957',
  },
  {
    number: '03.',
    title: (
      <>
        Motion <br /> Graphics
      </>
    ),
    desc: 'Animated Videos, Social Content, and Product Interactions',
    icon: Icon3,
    bg: '#FFBC01',
  },
  {
    number: '04.',
    title: 'Illustrations',
    desc: 'Custom Artwork, Icons, and Creative Visual Content',
    icon: Icon4,
    bg: '#FFFAF7',
    extraClass: 'last-service',
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="ServiceCard text-white">
      <div className="custom-container">
      <div>
        <p className="mb-5 font-24">Services I offer:</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="p-4 h-100 rounded"
                style={{ backgroundColor: service.bg, color: '#000' }}
              >
                <img
                  src={service.icon}
                  alt="icon"
                  style={{ marginBottom: '6rem' }}
                />
                <p className="mb-1" style={{ fontSize: '20px' }}>
                  {service.number}
                </p>
                <p
                  className={`service-title ${service.extraClass || ''}`}
                  style={{
                    fontSize: '32px',
                    fontWeight: '400',
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  {service.title}
                </p>

                <hr
                  style={{ borderTop: '1px solid #000', opacity: 0.7 }}
                />
                <p style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }} className="last-p">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
