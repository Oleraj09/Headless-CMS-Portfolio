import { useState, useEffect } from "react";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import useFetch from "../../ContextAPI/FetchApi";
import SEO from "../../components/SEO";

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
        setVisibleCount(9);
    };

    useEffect(() => {
        setIsLoading(false);
    }, [portfolioData]);

    return (
        <>
            <SEO
                title="Portfolio"
                description="What I do? Let's Check."
            />
            <TitleBar
                bgImg={portfolioImg}
                title="Portfolio"
                description="What I do? Let's Check."
            />

            <div className="container auto-center">
                <h2
                    className="text-3xl font-bold text-center"
                    style={{ margin: "20px 0 10px 0" }}
                >
                    Portfolio List
                </h2>

                <div className="filter flex gap-2 justify-center pb-10 flex-wrap">
                    <button
                        key="All"
                        onClick={() => handleFilterChange("All")}
                        className={`px-5 py-1 uppercase rounded-full cursor-pointer transition-all ${filter === "All"
                            ? "bg-[#000] text-white"
                            : "bg-[#ddd] text-[#000]"
                            }`}
                    >
                        All
                    </button>
                    {AllCategory.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleFilterChange(cat.id)}
                            className={`px-5 py-1 uppercase rounded-full cursor-pointer transition-all ${filter === Number(cat.id)
                                ? "bg-[#000] text-white"
                                : "bg-[#ddd] text-[#000]"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="works-grid">
                        {Array.from({ length: visibleCount }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-[25px] overflow-hidden border border-gray-200 animate-pulse"
                            >
                                <div className="h-48 bg-gray-300"></div>
                                <div className="px-3 pt-3 pb-5">
                                    <div className="h-4 bg-gray-300 w-2/3 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-300 w-1/2 rounded mb-2"></div>
                                    <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredPortfolio.length === 0 ? (
                    <div className="works-grid">
                        {Array.from({ length: visibleCount }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-[25px] overflow-hidden border border-gray-200 animate-pulse"
                            >
                                <div className="h-48 bg-gray-300"></div>
                                <div className="px-3 pt-3 pb-5">
                                    <div className="h-4 bg-gray-300 w-2/3 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-300 w-1/2 rounded mb-2"></div>
                                    <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="works-grid">
                        {visiblePortfolio.map((work) => (
                            <a
                                href={`/portfolios-details/${work.id}`}
                                className="work-card hover:shadow-lg"
                                key={work?.id}
                                rel="noopener noreferrer nofollow"
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
                                    <h3 className="work-title leading-none">
                                        {work?.title?.rendered}
                                    </h3>
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
