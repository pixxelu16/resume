import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceCard.css'

// Import your icons
import Icon1 from '../../Assets/Images/Service-icon-1.png';
import Icon2 from '../../Assets/Images/Service-icon-2.png';
import Icon3 from '../../Assets/Images/Service-icon-3.png';
import Icon4 from '../../Assets/Images/Service-icon-4.png';

const services = [
  {
    number: '01.',
    title: 'Brand Development',
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon1,
    bg: '#F3B3D8', // pink
  },
  {
    number: '02.',
    title: 'UI/UX Design',
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon2,
    bg: '#D1E957', // green
  },
  {
    number: '03.',
    title: 'Motion Graphics',
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon3,
    bg: '#FFBC01', // yellow-orange
  },
  {
    number: '04.',
    title: 'Illustrations',
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon4,
    bg: '#FFFAF7', // white
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="ServiceCard text-white">
      <div className="">
        <p className="mb-5 font-24">Services I offer:</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                className="p-4 h-100 rounded"
                style={{ backgroundColor: service.bg, color: '#000' }}
              >
                <img src={service.icon} alt={service.title} style={{ marginBottom: '6rem' }} />
                <p className="mb-1" style={{fontSize: '20px' }}>{service.number}</p>
                <p className="" style={{fontSize:'32px',fontWeight: '400'}}>{service.title }</p>
                <hr style={{ borderTop: '1px solid #000', opacity: 0.7 }} />
                <p style={{ fontSize: '20px' }} className='last-p'>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
