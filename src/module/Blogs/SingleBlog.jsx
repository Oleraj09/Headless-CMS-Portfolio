import { useParams, Link } from "react-router-dom";
import useFetch from "../../ContextAPI/FetchApi";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import Loader from "../../components/Loader";
import SEO from "../../components/SEO";
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = () => {
    const { id } = useParams();
    const [data] = useFetch(`https://post.olerajhossin.top/wp-json/wp/v2/posts/${id}/?_embed&acf_format=standard`);
    const site = data; // Alias for cleaner access

    if (!data) return <Loader />

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

    return (
        <>
            <SEO
                title={data?.title?.rendered}
                description={data?.excerpt?.rendered?.replace(/<[^>]+>/g, '') || data?.title?.rendered}
                image={data?.acf?.post_image?.url}
            />
            {/* Unique Single Blog Header */}
            <div className="relative w-full h-[60vh] min-h-[400px] flex items-center">
                <style>{`
                    .blog-header-overlay {
                        background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%);
                    }
                `}</style>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${data?.acf?.post_image?.url || portfolioImg})` }}
                />
                <div className="absolute inset-0 blog-header-overlay z-10" />

                <div className="w-full mx-auto px-5 pt-24 pb-16 z-20 relative">
                    <div className="mx-auto text-center">
                        <Link to="/blogs" className="text-white/80 hover:text-white flex items-center justify-center gap-2 mb-6 transition-colors pb-10 mx-auto group">
                            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Blogs
                        </Link>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            {parse(data?.title?.rendered || "")}
                        </h1>
                        <div className="flex items-center gap-3 justify-center pt-10">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg uppercase">
                                {data?._embedded?.author[0].name.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="text-gray-300 text-sm">Written by</p>
                                <p className="text-white font-medium text-lg">{data?._embedded?.author[0].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-5 py-16 w-full">
                <div
                    className="w-full text-center flex flex-col gap-4 items-center px-4"
                >
                    {parse(data?.content?.rendered || "")}
                </div>
            </div>

            <div className="border-t border-gray-200 mt-10">
                <Vission />
            </div>
        </>
    )
}

export default SingleBlog;