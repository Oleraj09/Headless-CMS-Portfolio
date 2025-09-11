import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [animation, setAnimation] = useState(false);
    const toggleMenu = () => {
        setAnimation(true);
        setMobileMenuOpen(!isMobileMenuOpen);
        setTimeout(() => setAnimation(false), 700);
    };
    const handleLinkClick = () => {
        setTimeout(() => {
            setMobileMenuOpen(false);
        }, 200);
    };
    const site = useSiteSettings();
    return (
        <>
            <div className="fixed container autos-center h-[60px] sm:h-[100px] z-[999]">
                <div className="flex justify-between items-center border-1 rounded-full bg-[#f8f8f8] backdrop-blur-md" style={{ padding: "0 20px" }}>
                    {/* Logo + Menu */}
                    <div className="flex items-center gap-x-[50px]">
                        <div className="logo text-[30px] cursor-pointer cursor-change">
                            <Link to="/" className="cursor-change">Ole.</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:block">
                            <nav>
                                <ul className="flex gap-x-8 text-[16px]">
                                    <li><Link to="/#home" className="cursor-change">Home</Link></li>
                                    <li><Link to="/#about" className="cursor-change">About Me</Link></li>
                                    <li><Link to="/blogs" className="cursor-change">Blogs</Link></li>
                                    <li><Link to="/portfolios" className="cursor-change">Portfolio</Link></li>
                                    <li><Link to="/#contact" className="cursor-change">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Hire Me Button */}
                    <div className="hidden sm:flex cursor-change items-center text-[18px] gap-x-[10px] border-[1px] rounded-full w-[140px] justify-center">
                        <a href={site?.acf?.hire_me} className="cursor-change" onClick={handleLinkClick}>Hire Me <FontAwesomeIcon icon={faArrowTrendUp} /></a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-[#222222] text-2xl cursor-change">
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            <div className={`
                fixed left-0 top-0 w-full bg-[#222] text-white sm:hidden z-50 overflow-hidden 
                transition-all ${animation ? "duration-700" : "duration-0"} ease-in-out 
                ${isMobileMenuOpen ? "h-[100vh]" : "h-0"}
            `}>
                <button onClick={toggleMenu} className="absolute right-3 top-4 text-white text-2xl cursor-pointer">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="h-[100%] flex items-center justify-center">
                    <ul className="flex flex-col items-center py-10 gap-y-[50px] text-[22px]">
                        <li><Link to="/#home " onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/#about" onClick={handleLinkClick}>About Me</Link></li>
                        <li><Link to="/portfolios" onClick={handleLinkClick}>Portfolio</Link></li>
                        <li><Link to="/blogs" onClick={handleLinkClick}>Blogs</Link></li>
                        <li><Link to="/#contact" onClick={handleLinkClick}>Contact</Link></li>

                        <li className="border-[1px] rounded-full w-[140px] flex items-center justify-center">
                            <Link to={site?.acf?.hire_me} onClick={handleLinkClick} className="flex items-center gap-x-2">
                                Hire Me <FontAwesomeIcon icon={faArrowTrendUp} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
