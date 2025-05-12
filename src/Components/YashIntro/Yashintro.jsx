import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap first
import './Yashintro.css'; // ✅ Your custom styles after Bootstrap

import BannerFace from '../../Assets/Images/Banner-Face.png';
import BannerDesign from '../../Assets/Images/banner-design.png';
import BannerText from '../../Assets/Images/Banner-text.png';
import BannerIcon from '../../Assets/Images/banner-icon.png';

const YashIntro = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    return (
        <section className="yash-intro py-5 bg-black text-white text-center">
                <div className="d-flex justify-content-center gap-60">
                    {/* Left side - Bubble design and text */}
                    <div className="">
                        <div data-aos="fade-right" className="mb-2">
                            <img
                                src={BannerDesign}
                                alt="Speech bubble"
                                className="img-fluid position-absolute top-0 start-0"
                                style={{ maxWidth: '100%', zIndex: 1 }}
                            />
                        </div>
                        <div data-aos="fade-right">
                            <img
                                src={BannerText}
                                alt="Speech bubble text"
                                className="img-fluid position-relative speech-bubble-text"
                                style={{ maxWidth: '80%', zIndex: 2 }}
                            />
                        </div>
                    </div>

                    {/* Right side - Head illustration */}
                    <div className="" data-aos="zoom-in">
                        <img
                            src={BannerFace}
                            alt="Yash cartoon illustration"
                            className="img-fluid"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </div>

                {/* Bottom caption */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="intro-caption font-52 mb-4" data-aos="fade-up">
                            *Designs experiences with emphasis on visual design strategies & systems
                        </h1>
                        <img
                            src={BannerIcon}
                            alt="Scroll down"
                            style={{ cursor: 'pointer', animation: 'bounce 2s infinite' }}
                            onClick={() => {
                                document.getElementById('next-project')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    </div>
            </div>
        </section>
    );
};

export default YashIntro;
