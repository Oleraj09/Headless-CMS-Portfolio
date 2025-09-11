import { Link } from "react-router-dom";
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";
const Footer = () => {
    const site = useSiteSettings();
    return (
        <div className="relative overflow-hidden bg-[#222222] h-[250px] flex items-center">
            <div className="container auto-center px-4 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0">
                <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-12">
                    <li className="text-white text-[16px] cursor-pointer"><Link to="/#home" className="cursor-change">Home</Link></li>
                    <li className="text-white text-[16px] cursor-pointer"><Link to="/blogs" className="cursor-change">About Me</Link></li>
                    <li className="text-white text-[16px] cursor-pointer"><Link to="/portfolios" className="cursor-change">Portfolio</Link></li>
                    <li className="text-white text-[16px] cursor-pointer"><Link to="/#blogs" className="cursor-change">Blog</Link></li>
                </ul>
                <p className="text-white text-[20px] md:text-[30px] lg:text-[45px] text-center md:text-right break-words">
                    <a href="mailto:olerajhossin@gmail.com" className="cursor-change">{site?.acf?.enter_email_adress}</a>
                </p>
            </div>
            <div className="absolute hidden sm:block box1 top-[-10px] left-[-10px] h-[100px] w-[120px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
            <div className="absolute box2 top-[87px] left-[-10px] h-[340px] w-[300px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
            <div className="absolute hidden sm:block box2 top-[87px] left-[-10px] h-[340px] w-[120px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
            <div className="absolute box3  top-[-10px] right-[-10px] h-[80px] w-[400px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
            <div className="absolute box3 hidden sm:block  bottom-[-10px] right-[-10px] h-[192px] w-[300px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
            <div className="absolute hidden sm:block box3 bottom-[-10px] right-[-10px] h-[500px] w-[150px] border-[#fff] border-2 rounded-[7px] opacity-[0.05]"></div>
        </div>
    );
};

export default Footer;
