import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import Concept from '../../Components/Concept/Concept';
import Collage from '../../Components/Collage/Collage';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer'

const ProjectMindSet = () => {
    return (
        <>
            <Header />
            <Banner />
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
