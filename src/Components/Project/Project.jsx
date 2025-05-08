import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../../Assets/Images/project1.png';
import Img2 from '../../Assets/Images/project2.png';
import Img3 from '../../Assets/Images/project3.png';
import Img4 from '../../Assets/Images/project4.png';
import './Project.css';

const projects = [
    {
        img: Img1,
        title: "Bal Raksha Bharat",
        subtitle: "Logo & Brand Experience",
        desc: "Pitch for Bal Raksha Bharat’s rebranding which aimed to reposition the company as an optimistic child rights NGO.",
    },
    {
        img: Img2,
        title: "Trekkit",
        subtitle: "App Design & Research",
        desc: "A trekking app aiming to consolidate different aspects of trekking under one app while also giving them freedom to plan their own adventure",
    },
    {
        img: Img3,
        title: "Mindshare",
        subtitle: "Logo & Brand Experience",
        desc: "Branding done for a design and marketing solutions firm to reflect their ideas of communication and creating impact",
    },
    {
        img: Img4,
        title: "The School of Raya",
        subtitle: "App Design & Research",
        desc: "Branding pitch made for an IV league International Board school in Bengaluru to reflect their ideas of nature and flow",
    }
];

const ProjectShowcase = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="project-showcase text-white" id="next-project">
            <div className="heading-project ">
                <p>Some Projects I’ve Worked on</p>
                <button className='orange-button-1'>See All Projects +</button>
            </div>
            {projects.map((project, index) => (
                <div
                    className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    {/* Image */}
                    <div className="col-md-10">
                        <div className="position-relative">
                            <img src={project.img} alt={`${project.title} - ${project.subtitle}`} className="img-fluid rounded" />
                            <div className='display-flex'>
                                <div className='width-custom'>
                                    <h5 className='subtitle'>{project.title}</h5>
                                    <h6 className="color-grey">{project.subtitle}</h6>
                                </div>
                                <div>
                                    <p className="mt-2 color-grey">{project.desc}</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Text */}
                    <div className="col-md-2">

                    </div>
                </div>
            ))}
            <div className="botton">
                <button className='orange-button'>See More work ></button>
            </div>
        </section>
    );
};

export default ProjectShowcase;
