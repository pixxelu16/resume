import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer'
import TrekkitBanner from "../../Assets/Images/trekkit-banner.png";
import TrekitImg1 from '../../Assets/Images/trekkit-img-1.png';
import TrekitImg2 from '../../Assets/Images/Treekit-img-2.png';
import Feature from '../../Components/Feature/Index';
import MobileSlider from '../../Components/MobileSlider';
import MobileShowcase from '../../Components/MobileShowCase';
import Shoeimage1 from '../../Assets/Images/shoe-img-1.png';
import Showimage2 from '../../Assets/Images/shoe-img-2.png';
import './index.css';
const ProjectMindSet = () => {

    const leftContent = (
        <>
            <div className="mb-4">
                <h5>Nature of Project</h5>
                <p>Academic Project</p>
            </div>
            <div>
                <h5>Roles:</h5>
                <p>Research</p>
                <p>Comp-Study</p>
                <p>Wireframe</p>
                <p>Interface Design</p>
                <p>Prototyping</p>
            </div>
        </>
    );
    const conceptParagraphs = [
        `Introducing Trekkit, designed to enhance your outdoor adventures! Discover upcoming treks from hostels and agencies. Easily find or create trekking groups based on your preferences and and connect with like-minded adventurers. Support local businesses by renting or buying gear nearby. `,
        `Enjoy a seamless experience tailored to all kinds of trekkers. `
    ];
    const rightContent = (
        <>
            <h4>Brief:</h4>
            <p>
                The process of planning treks can be quite intimidating - from choosing the right trek to finding the right group.
            </p>
            <p>
                A lot of apps and websites offer pre-planned services, but their planning system is often rigid. Trips cannot be
                customized to users preferences - you can not select leaders, group members, dates etc. Existing apps also offer
                less options in terms of types of groups (youth hostels, solo travelers,etc.)
            </p>
            <p>
                Trekkit is a super app that takes care of all trekking essentials by offering a flexible and seamless experience.
            </p>
        </>
    );
    return (
        <>
            <Header />
            <Banner
                subtitle="TREKKIT | APPLICATION DESIGN"
                title={`Making the process of planning<br /> treks more intuitive.`}
                imageSrc={TrekkitBanner}
                imageAlt="Mindshare visual"
                textAnimation="fade-up"
                imageAnimation="fade-down"
            />
            <ProjectBrief left={leftContent} right={rightContent} delay={200} />
            <Image
                src={TrekitImg1}
                alt="Infinite visual"
                animation="fade-up"
                className="custom-style"
                duration={1500}
            />
            <Concept
                title="Concept"
                image={TrekitImg2}
                imageAlt="Ripples creating infinity"
                paragraphs={conceptParagraphs}
                imageAnimation="fade-right"
                textAnimation="fade-left"
                imageDelay={0}
                textDelay={200}
                aosDuration={1200}
            />
            <Feature />
            <MobileSlider />
            <MobileShowcase />
            <div className='shoe-class'>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={Shoeimage1} alt="" className='shoe-1' />
                        
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={Showimage2} alt="" className='shoe-2'/>
                    </div>
                </div>
            </div>
            </div>
            <ProjectSlider />
            <Footer />
        </>
    );
};
export default ProjectMindSet;
