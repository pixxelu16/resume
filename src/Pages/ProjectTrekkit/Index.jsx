import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import Collage from '../../Components/Collage/Collage';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer'
import TrekkitBanner from "../../Assets/Images/trekkit-banner.png";

const ProjectMindSet = () => {
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
