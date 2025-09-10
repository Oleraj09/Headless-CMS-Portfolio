import { useState, useEffect } from "react";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../ContextAPI/FetchApi";

const PortfolioPage = () => {
    const [category] = useFetch(
        "https://post.olerajhossin.top/wp-json/wp/v2/portfolio-catagory?acf_format=standard"
    );
    const AllCategory = Array.isArray(category) ? category : [];

    const [filter, setFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(9);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUrl =
        filter === "All"
            ? "https://post.olerajhossin.top/wp-json/wp/v2/portfolio?acf_format=standard"
            : `https://post.olerajhossin.top/wp-json/wp/v2/portfolio?portfolio-catagory=${filter}&acf_format=standard`;

    const [portfolioData] = useFetch(fetchUrl);
    const filteredPortfolio = Array.isArray(portfolioData) ? portfolioData : [];
    const visiblePortfolio = filteredPortfolio.slice(0, visibleCount);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 9);
            setIsLoading(false);
        }, 500);
    };

    const handleFilterChange = (newFilter) => {
        setIsLoading(true);
        setFilter(newFilter === "All" ? "All" : Number(newFilter));
        setVisibleCount(3);
    };

    useEffect(() => {
        setIsLoading(false);
    }, [portfolioData]);

    return (
        <>
            <TitleBar
                bgImg={portfolioImg}
                title="Portfolio"
                description="What I do? Let's Check."
            />

            <div className="container auto-center">
                <h2 className="text-3xl font-bold text-center" style={{ margin: "20px 0 10px 0" }}>Portfolio List</h2>

                <div className="filter flex gap-2 justify-center pb-10 flex-wrap">
                    <button
                        key="All"
                        onClick={() => handleFilterChange("All")}
                        className={`px-5 py-1 uppercase rounded-full cursor-pointer ${filter === "All" ? "bg-[#000] text-white" : "bg-[#ddd] text-[#000]"
                            }`}
                    >
                        All
                    </button>
                    {AllCategory.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleFilterChange(cat.id)}
                            className={`px-5 py-1 uppercase rounded-full cursor-pointer ${filter === Number(cat.id)
                                    ? "bg-[#000] text-white"
                                    : "bg-[#ddd] text-[#000]"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20 gap-2">
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
                    <div className="works-grid">
                        {visiblePortfolio.map((work) => (
                            <a
                                href={work?.link || "#"}
                                className="work-card hover:shadow-lg "
                                key={work?.id}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="work-number relative h-[260px] rounded-[25px]">
                                    <img
                                        src={work?.acf?.project_thumbnail}
                                        alt={work?.title?.rendered || "Portfolio Item"}
                                        className="portfolio-img rounded-[15px]"
                                    />
                                </div>
                                <div className="px-3 pt-3 pb-5">
                                    <span className="work-type leading-none italic">
                                        For {work?.acf?.clients_name || "Client"}
                                    </span>
                                    <h3 className="work-title leading-none">{work?.title?.rendered}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {!isLoading && visibleCount < filteredPortfolio.length && (
                    <div className="pt-4 pb-10 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 bg-[#222] text-white font-medium rounded-[25px] hover:bg-[#7b7b7b] transition cursor-pointer"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            <Vission />
        </>
    );
};

export default PortfolioPage;
