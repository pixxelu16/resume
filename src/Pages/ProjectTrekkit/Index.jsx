import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import Collage from '../../Components/Collage/Collage';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer'
import mindshareImage from "../../Assets/Images/mindshare-banner.png";

const ProjectMindSet = () => {
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
            <ProjectBrief />
            <Image />
            <Concept />
            <Collage />
            <ProjectSlider />
            <Footer />
        </>
    );
};
export default ProjectMindSet;
