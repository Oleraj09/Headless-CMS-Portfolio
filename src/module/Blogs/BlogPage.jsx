import { useState } from "react";
import TitleBar from "../../components/TitleBar";
import blogImg from "../../assets/blogs.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Vission from "../Vission";
import useFetch from "../../ContextAPI/FetchApi";
import SEO from "../../components/SEO";

const BlogPage = () => {
    const [data, loading] = useFetch(
        "https://post.olerajhossin.top/wp-json/wp/v2/posts?_embed&acf_format=standard"
    );

    const formatACFDate = (acfDate) => {
        if (!acfDate) return "";
        const dateObj = new Date(acfDate);
        if (isNaN(dateObj)) return "";
        return dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const POSTS_PER_PAGE = 9;
    const LOAD_MORE_COUNT = 6;

    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);

    const visiblePosts = data && data.slice(0, visibleCount);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <SEO
                title="Blogs"
                description="Latest News and Updates."
            />
            <TitleBar
                bgImg={blogImg}
                title="Blogs"
                description="Latest News and Updates."
            />
            <section className="container auto-center">
                <h2 className="text-3xl font-bold" style={{ padding: "30px 0" }}>
                    All Blog Posts
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {!visiblePosts
                        ? Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
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
                        ))
                        : visiblePosts &&
                        visiblePosts.map((blog) => (
                            <a
                                key={blog.id}
                                href={`/blogs-details/${blog.id}`}
                                className="blog-card"
                            >
                                <div className="work-number relative rounded-[25px]">
                                    <img
                                        src={blog.acf.post_image.url}
                                        alt={blog.title.rendered}
                                        className="portfolio-img rounded-[10px]"
                                    />
                                    <div className="absolute right-[20px] top-[10px]">
                                        <p
                                            className="text-[#fff] bg-[#222] rounded-[25px] px-3 text-[12px] md:text-[14px]"
                                            style={{ padding: "5px 10px" }}
                                        >
                                            {formatACFDate(blog.date)}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 pt-3 pb-5">
                                    <div className="text-[#222] text-[12px] md:text-[16px]">
                                        <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>{" "}
                                        {blog.acf.category_name.name} —{" "}
                                        <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>{" "}
                                        {blog._embedded.author[0].name}
                                    </div>
                                    <h3 className="work-title leading-none">
                                        &#187; {blog.title.rendered}
                                    </h3>
                                </div>
                            </a>
                        ))}
                </div>

                {!loading && visibleCount < data?.length && (
                    <div className="py-10 text-center">
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
                                className="px-6 py-3 bg-[#222] text-white font-medium rounded-[25px] hover:bg-[#7b7b7b] transition cursor-change"
                            >
                                Load More
                            </button>
                        )}
                    </div>
                )}
                <div style={{ marginBottom: "60px" }}></div>
            </section>
            <Vission />
        </>
    );
};

export default BlogPage;
