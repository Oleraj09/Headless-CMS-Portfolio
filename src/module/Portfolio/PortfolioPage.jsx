import { useState } from "react";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioPage = () => {
    const AllPortfolio = Array.from({ length: 30 }).map((_, i) => ({
        id: i + 1,
        image: "https://images.unsplash.com/photo-1750711642160-efc6e052751a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        started: "21 June 2025",
        ended: "31 June 2025",
        Description: "lorem1 ",
        Technoloy: ["Laravel", "React", "Wordpress"][i % 3],
        title: `Pace Company Website ${i + 1}`,
        slug: `blog-post-${i + 1}`,
        author: "Admin"
    }));

    const [visibleCount, setVisibleCount] = useState(9);
    const [filter, setFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(false);
    const filteredPortfolio = AllPortfolio.filter(work =>
        filter === "All" || work.Technoloy === filter
    );

    const visiblePortfolio = filteredPortfolio.slice(0, visibleCount);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 9);
            setIsLoading(false);
        }, 500); 
    };


    const handleFilterChange = (type) => {
        setFilter(type);
        setVisibleCount(9);
    };

    return (
        <>
            <TitleBar bgImg={portfolioImg} title="Portfolio" description="What i do? Lets Check." />
            <div className="container auto-center">
                <h2 className="text-3xl font-bold text-center" style={{ padding: "30px 0" }}>Portfolio List</h2>

                {/* Filter Buttons */}
                <div className="filter flex gap-2 justify-center pb-10 flex-wrap">
                    {["All", "Wordpress", "React", "Laravel"].map(type => (
                        <button
                            key={type}
                            onClick={() => handleFilterChange(type)}
                            className={`px-5 py-1 uppercase rounded-full cursor-change ${filter === type ? 'bg-[#000] text-white' : 'bg-[#ddd] text-[#000]'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="works-grid">
                    {visiblePortfolio.map(work => (
                        <a href="#" className="work-card group" key={work.id}>
                            <div className="work-number relative rounded-[25px]">
                                <img src={work.image} alt="" className="portfolio-img rounded-[15px]" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-[#222] h-[50px] w-[50px] flex items-center justify-center rounded-full">
                                        <button>
                                            <FontAwesomeIcon className="text-white text-[20px]" icon={faArrowUpRightFromSquare} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 pt-3 pb-5">
                                <span className="work-type leading-none italic">For {work.Technoloy}</span>
                                <h3 className="work-title leading-none">{work.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredPortfolio.length && (
                    <div className="pt-4 pb-10 text-center">
                        {isLoading ? (
                            <div className="flex justify-center items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    ></path>
                                </svg>
                                <span className="text-[#222222] font-medium">Loading...</span>
                            </div>
                        ) : (
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-2 bg-[#222] text-white font-medium rounded-[25px] hover:bg-[#7b7b7b] transition cursor-change"
                            >
                                Load More
                            </button>
                        )}
                    </div>
                )}
            </div>
            <Vission />
        </>
    );
};

export default PortfolioPage;
