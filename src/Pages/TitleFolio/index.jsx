import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import BalrakshaGrey from '../../Assets/Images/Balraksha-grey-banner.png';
import Titlefolio1 from '../../Assets/Images/title-folio-1.png';
import Titlefolio2 from '../../Assets/Images/title-folio-2.png';
import Titlefolio3 from '../../Assets/Images/title-folio-3.png';
import Titlefolio4 from '../../Assets/Images/title-folio-4.png';
import Titlefolio5 from '../../Assets/Images/title-folio-5.png';
import Titlefolio6 from '../../Assets/Images/title-folio-6.png';
import Titlefolio7 from '../../Assets/Images/title-folio-7.png';
import Titlefolio8 from '../../Assets/Images/title-folio-8.png';
import Titlefolio9 from '../../Assets/Images/title-folio-9.png';
import Titlefolio10 from '../../Assets/Images/title-folio-10.png';
import Titlefolio11 from '../../Assets/Images/title-folio-11.png';
import Titlefolio12 from '../../Assets/Images/title-folio-12.png';
import Titlefolio13 from '../../Assets/Images/title-folio-13.png';
import Titlefolio14 from '../../Assets/Images/title-folio-14.png';
import Titlefolio15 from '../../Assets/Images/title-folio-15.png';
import './index.css'
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
                <p>Freelance</p>
            </div>
            <div>
                <h5>Roles:</h5>
                <p>Type/ Title Designer</p>

            </div>
        </div>
    );


    const rightContent = (
        <div data-aos="fade-lef">
            <h4>Brief:</h4>
            <p>
                This project is a curated collection of title designs developed for various contexts — from films and videos to personal experiments.
                Each title explores a unique visual language, crafted to reflect the tone, mood, and narrative of its context.
            </p>
        </div>
    );

    return (
        <div className="titlefolio-page">
            <Header />
            <Banner
                subtitle="TitleFOlio | Title Design and TYPOGRAPHY"
                title={`Making the process of planning treks more intuitive.`}
                imageSrc={BalrakshaGrey}
                imageAlt="Trekkit visual"
                textAnimation="fade-up"
                imageAnimation="fade-down"
            />
            <ProjectBrief left={leftContent} right={rightContent} delay={200} />
            <div className="titlefolio-collage">
                <div className="custom-container">
                    <div className="row up-border">
                         <p className='font-24'>Of Men & Puppets <span>(Graphic Novel by Rohit Issac Thomas)</span></p>
                        <div className="col-md-12 text-center">
                            <img src={Titlefolio1} alt="" className='Titlefolio1' />
                        </div>
                    </div>
                    <div className="row up-border ">
                          <p className='font-24 text-end'>Amala (<span>Short Film by</span> Maithili Ajay Phatak)</p>
                        <div className="col-md-6">
                            <img src={Titlefolio2} alt="" className='w-100'/>
                        </div>
                        <div className="col-md-6 amla">
                            <img src={Titlefolio3} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="row up-border">
                          <p className='font-24'>Babi (<span>Documentary by</span> Maithili Ajay Phatak)</p>
                        <div className="col-md-7">
                            <img src={Titlefolio4} alt="" className='w-100' />
                            <img src={Titlefolio5} alt="" className='w-100'  />
                        </div>
                        <div className="col-md-5">
                            <img src={Titlefolio6} alt="" className='w-100'  />
                        </div>
                    </div>
                    <div className="row up-border">
                           <p className='font-24 text-end'>Atithi Daivo Bhava (<span>Animated Short FIlm by</span> Pranav Holla)</p>
                        <div className="col-md-5">
                            <img src={Titlefolio7} alt="" className='w-100' />

                        </div>
                        <div className="col-md-7 text-center">
                            <img src={Titlefolio8} alt="" className='padding-cust'/>
                            <img src={Titlefolio9} alt="" className='w-100' />
                        </div>

                    </div>
                    <div className="row up-border">
                          <p className='font-24'>Babi (<span>Documentary by </span>Maithili Ajay Phatak)</p>
                        <div className="col-md-12 text-center">
                            <img src={Titlefolio10} alt=""/>
                        </div>
                    </div>
                    <div className="row up-border">
                          <p className='font-24 text-end'>Atithi Daivo Bhava (<span>Animated Short FIlm by</span> Pranav Holla)</p>
                        <div className="col-md-12">
                            <img src={Titlefolio11} alt="" className='w-100'/>
                        </div>
                        <div className="col-md-6">
                            <img src={Titlefolio12} alt="" className='w-100'/>
                        </div>
                        <div className="col-md-6">
                            <img src={Titlefolio13} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="row up-border">
                           <p className='font-24'>Babi (<span>Documentary by </span>  Maithili Ajay Phatak)</p>
                        <div className="col-md-6">
                            <img src={Titlefolio14} alt="" className='w-100'/>
                            <img src={Titlefolio14} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <img src={Titlefolio15} alt="" className='w-100'/>
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
