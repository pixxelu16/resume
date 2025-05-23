import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import DownloadResume from '../../Components/DownloadResume/DownloadResume';
import GreyImage from '../../Assets/Images/grey-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import BrandWorkHighlights from '../../Components/WorkExperience';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import ServicesSection from '../../Components/ServiceCard/ServiceCard';
import BlankSlider from '../../Components/BlankSlider/index.jsx';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-page'>
            <Header />
            <DownloadResume />
            <div className="about-resume"> 
                <div className="custom-container">
                    <div className='row'>
                        <div className="col-md-8 grey-content padding-right-70">
                            <p>I’m drawn to everything visual and obsessed with storytelling that leaves a mark. ...</p>
                            <p className='pb-5'>I believe good design should be invisible ...</p>
                            <p>I’m drawn to everything visual and obsessed ...</p>
                            <p>I believe good design should be invisible ...</p>
                        </div>
                        <div className="col-md-4">
                            <img src={GreyImage} alt="" className='greyimg' />
                        </div>
                    </div>
                </div>
            </div>
            <BrandWorkHighlights />
            <BlankSlider />
            <ServicesSection />
            <ProjectSlider />
            <Footer />
        </div>
    );
};

export default About;
