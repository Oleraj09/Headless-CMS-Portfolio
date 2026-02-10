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
import SEO from "../components/SEO";

const Home = () => {
    const site = useSiteSettings();
    if (!site) {
        return <Loader />
    }
    return (
        <>
            <SEO
                title={site?.acf?.header_logo_text}
                description={site?.description}
                image={site?.acf?.header_logo}
            />
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