import { faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";
const HireMe = () => {
    const site = useSiteSettings();
    return (
        <>
            <div className="bg-[#fff] pb-20">
                <div id="about" className="container auto-center">
                    <div className="w-full h-[400px] bg-[#222] text-white flex items-center flex-col justify-center rounded-[10px]">
                        <p className="text-[14px]">Book a Free Consultation </p>
                        <div className="consult text-center py-2">
                            <h1 className="text-[22px] sm:text-[36px] leading-none">Exclusive Offer For New Client!</h1>
                            <h1 className="text-[22px] sm:text-[36px] leading-none">Free Consultation</h1>
                        </div>
                        <p className="text-[10px] sm:text-[15px] font-thin text-center leading-none">Take advantage as a new client, make a appointment <br /> and build your website.</p>
                        <a href={`mailto:${site?.acf?.enter_email_adress}?subject=Inquire%20for%20%20website%20development.`}>
                            <button className="text-[15px] pt-8 cursor-change flex flex-row items-center gap-1"> &#x260F; Contact Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HireMe;