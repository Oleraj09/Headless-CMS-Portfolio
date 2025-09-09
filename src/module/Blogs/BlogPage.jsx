import { useState } from "react";
import TitleBar from "../../components/TitleBar";
import blogImg from "../../assets/blogs.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Vission from "../Vission";
const BlogPage = () => {
    const allPosts = Array.from({ length: 30 }).map((_, i) => ({
        id: i + 1,
        image: "https://images.unsplash.com/photo-1750711642160-efc6e052751a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "21 June 2025",
        category: "Laravel Tips",
        title: `Blog Post Title ${i + 1} Where post is done by user${i + 1} `,
        slug: `blog-post-${i + 1}`,
        author: "Admin"
    }));

    const POSTS_PER_PAGE = 9;
    const LOAD_MORE_COUNT = 6;

    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);

    const visiblePosts = allPosts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <TitleBar
                bgImg={blogImg}
                title="Blogs"
                description="Latest News and Updates."
            />
            <section className="container auto-center">
                <h2 className="text-3xl font-bold" style={{padding:"30px 0"}}>All Blog Posts</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {visiblePosts.map((blog) => (
                        <a
                            key={blog.id}
                            href={`/blog/${blog.slug}`}
                            className="blog-card"
                        >
                            <div className="work-number relative rounded-[25px]">
                                <img src={blog.image} alt="" className="portfolio-img rounded-[10px]" />
                                <div className="absolute right-[20px] top-[10px]">
                                    <p className="text-[#fff] bg-[#222] rounded-[25px] px-3 text-[12px] md:text-[14px]" style={{ padding: "5px 10px" }}>{blog.date}</p>
                                </div>
                            </div>
                            <div className="px-3 pt-3 pb-5">
                                <div className="text-[#222] text-[12px] md:text-[16px]"><FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon> {blog.category} — <FontAwesomeIcon icon={faAt}></FontAwesomeIcon> {blog.author}</div>
                                <h3 className="work-title leading-none">&#187; {blog.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>

                {visibleCount < allPosts.length && (
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
            </section>
            <Vission />
        </>
    );
};

export default BlogPage;
