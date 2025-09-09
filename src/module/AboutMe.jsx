import { faEarthAsia, faMarsAndVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrowImg from '../assets/arroes.png';
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";
const AboutMe = () => {
    const site = useSiteSettings();
    return (
        <>
            <div className="bg-[#f8f8f8] py-20">
                <div id="about" className="container auto-center">
                    <div className="flex flex-col lg:flex-row w-full gap-10">
                        <div className="lg:basis-4/12">
                            <h1 className="text-[28px]">About Me</h1>
                            <p className="text-[16px]">{site?.acf?.about_me}</p>
                            <img className="hidden lg:block" src={arrowImg} alt="" style={{height:'80%',  width:'90%'}}/>
                        </div>
                        <div className="lg:basis-4/12 flex flex-col items-center bg-[#fff] py-10 rounded-[10px]">
                            <FontAwesomeIcon className="text-[30px]" icon={faEarthAsia}></FontAwesomeIcon>
                            <h1 style={{ padding: "10px 0" }}>Available 24/7</h1>
                            <p className="text-[16px] text-center" style={{ padding: "0 0 30px 0" }}>Available for work — expert WordPress, React, and Laravel developer.</p>
                            <div className="headshots h-[250px] w-[200px] rounded-[25px]">
                                <img src={site?.acf?.available_247} alt="HeadShot" className="rounded-[10px]" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className="lg:basis-4/12 flex items-center flex-col">
                            <div className="headshots h-[120px] w-[120px] rounded-[25px] hidden lg:block">
                                <img src={site?.acf?.about_more_image} alt="HeadShot" className="rounded-[10px]" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="info pt-[10px] sm:pt-[60px] self-start">
                                <p style={{padding: "5px 0"}}>➤  {site?.acf?.about_more_1}</p>
                                <p style={{padding: "5px 0"}}>➤  {site?.acf?.about_more_2}</p>
                                <p style={{padding: "5px 0"}}>➤  {site?.acf?.about_more_3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe;