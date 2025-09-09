import { faEarthAsia, faMarsAndVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headImg from '../assets/head.jpg';
import fullImg from '../assets/full.jpg';
import arrowImg from '../assets/arroes.png';
const AboutMe = () => {
    return (
        <>
            <div className="bg-[#f8f8f8] py-20">
                <div id="about" className="container auto-center">
                    <div className="flex flex-col lg:flex-row w-full gap-10">
                        <div className="lg:basis-4/12">
                            <h1 className="text-[28px]">About Me</h1>
                            <p className="text-[16px]">WordPress developer skilled in React and Laravel. I create custom, responsive websites and apps with clean code, delivering efficient solutions tailored to client needs.</p>
                            <img className="hidden lg:block" src={arrowImg} alt="" style={{height:'80%',  width:'90%'}}/>
                        </div>
                        <div className="lg:basis-4/12 flex flex-col items-center bg-[#fff] py-10 rounded-[10px]">
                            <FontAwesomeIcon className="text-[30px]" icon={faEarthAsia}></FontAwesomeIcon>
                            <h1 style={{ padding: "10px 0" }}>Available 24/7</h1>
                            <p className="text-[16px] text-center" style={{ padding: "0 0 30px 0" }}>Available for work — expert WordPress, React, and Laravel developer.</p>
                            <div className="headshots h-[250px] w-[200px] rounded-[25px]">
                                <img src={headImg} alt="HeadShot" className="rounded-[10px]" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className="lg:basis-4/12 flex items-center flex-col">
                            <div className="headshots h-[120px] w-[120px] rounded-[25px] hidden lg:block">
                                <img src={fullImg} alt="HeadShot" className="rounded-[10px]" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="info pt-[10px] sm:pt-[60px] self-start">
                                <p style={{padding: "5px 0"}}>➤ 2+ years of experience in WordPress development, focusing on custom themes, plugins, and responsive design. I’m skilled in PHP, HTML, CSS, JavaScript, and have worked with Avada theme, Elementor and WooCommerce.</p>
                                <p style={{padding: "5px 0"}}>➤ 1+ year of experience in React and Laravel development. I build dynamic web applications with React for the frontend and Laravel for the backend, focusing on clean code, RESTful APIs, and responsive UI.</p>
                                <p style={{padding: "5px 0"}}>➤ Also Have English communication and client handling skills, ensuring clear understanding of project requirements, effective collaboration, and professional support throughout the development process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe;