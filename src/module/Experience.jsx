import useFetch from '../ContextAPI/FetchApi';
import { useSiteSettings } from "../ContextAPI/SiteSettingContextAPI";

const Experience = () => {
    const [data] = useFetch("https://post.olerajhossin.top/wp-json/wp/v2/experience?acf_format=standard");
    const site = useSiteSettings();

    const formatACFDate = (acfDate) => {
        if (!acfDate) return "";
        const [day, month, year] = acfDate.split("/").map(Number);
        if (!day || !month || !year) return "";
        const dateObj = new Date(year, month - 1, day);
        return dateObj.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    };

    const isLoading = !data || data.length === 0;

    return (
        <div className="bg-[#fff] py-20">
            <div id="about" className="container auto-center">
                <div className="flex flex-col lg:flex-row w-full gap-10">
                    <div className="lg:basis-6/12">
                        <h1>● Experience</h1>
                        <h1 className="text-[32px] leading-none">
                            Explore My Developer <br /> Journey.
                        </h1>
                    </div>
                    <div className="lg:basis-6/12">
                        <p style={{ paddingBottom: "10px" }} className="w-auto lg:w-[600px]">
                            With over 2 years of experience, I specialize in crafting stylish and responsive websites using WordPress, React, and Laravel, focusing on clean design, smooth functionality, and user-friendly interfaces.
                        </p>
                        <a href={site?.acf?.hire_me} className="underline">Hire Me.</a>
                    </div>
                </div>

                <div className="details pt-20">
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="py-3 animate-pulse">
                                <div className="flex flex-col lg:flex-row w-full gap-5 md:gap-10">
                                    <div className="lg:basis-4/12">
                                        <div className="h-6 bg-gray-300 w-3/4 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
                                    </div>
                                    <div className="lg:basis-4/12">
                                        <div className="h-4 bg-gray-300 w-full rounded mb-2"></div>
                                        <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
                                    </div>
                                    <div className="lg:basis-4/12 flex gap-[5px] justify-start lg:justify-end">
                                        <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                                        <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                                        <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="divider-line pt-5"></div>
                            </div>
                        ))
                        : data.map((exp, index) => (
                            <div key={index} className="py-3">
                                <div className="flex flex-col lg:flex-row w-full gap-5 md:gap-10">
                                    <div className="lg:basis-4/12">
                                        <p className="text-[22px] leading-none" style={{ paddingBottom: "10px" }}>{exp?.title.rendered}</p>
                                        <p className="text-[15px] leading-none">
                                            ● {formatACFDate(exp.acf.start_date)} - {exp.acf.end_date ? formatACFDate(exp.acf.end_date) : "Present"}
                                        </p>
                                    </div>
                                    <div className="lg:basis-4/12">
                                        <p className="text-[16px]" style={{ paddingBottom: "10px" }}>{exp.acf.job_description}</p>
                                        <p className="text-[16px] italic">{exp.acf.postion}</p>
                                    </div>
                                    <div className="lg:basis-4/12">
                                        <div className="flex gap-[5px] justify-start lg:justify-end">
                                            {Object.values(exp.acf.technology).map((skill, idx) => (
                                                <button key={idx} className="bg-[#222] text-[#fff] text-[14px] px-3 rounded-[25px]">{skill}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-line pt-5"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;
