const exp = [
    { id: 1, company: 'BITM, Dhaka', start: 'September 2022', end: 'December 2023', details: 'Working with HTML, CSS, JS, JQuery, Bootstrap and Ajax', position: 'Trainee Designer', skill: { item1: 'HTML', item2: 'CSS' } },
    { id: 2, company: 'BITM, Dhaka', start: 'September 2022', end: 'December 2023', details: 'Gain Skill On PHP, OPP and Laravel with MySQL.', position: 'Trainee Developer', skill: { item1: 'PHP', item2: 'Laravel' } },
    { id: 3, company: 'DynamicFlowIT', start: 'February 2025', end: 'May 2025', details: 'Learned Core Wordpress and Customization and Basic UI/UX, Also React and PHP.', position: 'Web Developer Intern', skill: { item1: 'Wordpress', item2: 'React' } },
    { id: 4, company: 'DynamicFlowIT', start: 'May 2025', end: 'Present', details: 'Currently working as a web developer. Skill on Wordpress, React and Laravel.', position: 'Junior Web Developer', skill: { item1: 'Wordpress', item2: 'React', item3: 'Laravel' } }
]
const Experience = () => {
    return (
        <>
            <div className="bg-[#fff] py-20">
                <div id="about" className="container auto-center">
                    <div className="flex flex-col lg:flex-row w-full gap-10">
                        <div className="lg:basis-6/12">
                            <h1>● Experience</h1>
                            <h1 className="text-[32px] leading-none">Explore My Developer <br /> Journey.</h1>
                        </div>
                        <div className="lg:basis-6/12">
                            <p style={{ paddingBottom: "10px" }} className="w-auto lg:w-[600px]">With over 2 years of experience, I specialize in crafting stylish and responsive websites using WordPress, React, and Laravel, focusing on clean design, smooth functionality, and user-friendly interfaces.</p>
                            <a href="https://www.fiverr.com/oleraj_mondol" className="underline">Hire Me.</a>
                        </div>
                    </div>
                    <div className="details pt-20">
                        {exp.slice().reverse().map((exp, index) => (
                            <div key={index} className="py-3">
                                <div className="flex flex-col lg:flex-row w-full gap-5 md:gap-10">
                                    <div className="lg:basis-4/12">
                                        <p className="text-[22px] leading-none" style={{ paddingBottom: "10px" }}>{exp.company}</p>
                                        <p className="text-[15px] leading-none">● {exp.start} - {exp.end}</p>
                                    </div>
                                    <div className="lg:basis-4/12">
                                        <p className="text-[16px]" style={{ paddingBottom: "10px" }}>{exp.details}</p>
                                        <p className="text-[16px] italic">{exp.position}</p>
                                    </div>
                                    <div className="lg:basis-4/12">
                                        <div className="flex gap-[5px] justify-start lg:justify-end">
                                            {Object.values(exp.skill).map((skill, index)=>(
                                                 <button key={index} className="bg-[#222] text-[#fff] text-[14px] px-3 rounded-[25px]">{skill}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-line pt-5"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Experience;