import AboutMe from "./AboutMe";
import Blogs from "./Blogs";
import Experience from "./Experience";
import HeroSection from "./HeroSection"
import HireMe from "./HireMe";
import LatestWork from "./LatestWork";
import ScrollProject from "./ScrollProject";
import Vission from "./Vission";
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";
import Loader from "../components/Loader";
const Home = () => {
    const site = useSiteSettings();
    if (!site) {
        return <Loader />
    }
    return (
        <>
            <HeroSection />
            <AboutMe />
            <ScrollProject />
            <Experience />
            <HireMe />
            <LatestWork />
            <Blogs />
            <Vission />
        </>
    )
}
export default Home;