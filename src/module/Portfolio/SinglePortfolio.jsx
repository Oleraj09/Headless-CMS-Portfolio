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

const SinglePortfolio = () => {
    const { id } = useParams();
    const [data] = useFetch(`https://post.olerajhossin.top/wp-json/wp/v2/portfolio/${id}/?acf_format=standard`);
    if (!data) return <Loader />
    return (
        <>
            <SEO
                title={data?.title?.rendered}
                description={data?.excerpt?.rendered?.replace(/<[^>]+>/g, '') || data?.title?.rendered}
                image={data?.acf?.project_thumbnail}
            />
            {/* Unique Portfolio Header */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-end bg-gray-900 text-white">
                <style>{`
                    .portfolio-header-overlay {
                         background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
                    }
                `}</style>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-60"
                    style={{ backgroundImage: `url(${data?.acf?.project_thumbnail || portfolioImg})` }}
                />
                <div className="absolute inset-0 portfolio-header-overlay z-10" />

                <div className="mx-auto px-5 pb-16 z-20 relative w-full">
                    <div className="mx-auto text-center">
                        <Link to="/portfolios" className="text-white/80 hover:text-white flex items-center justify-center gap-2 mb-6 transition-colors pb-10 mx-auto group">
                            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <span className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-2 block">
                            {data?.acf?.clients_name ? `Client: ${data.acf.clients_name}` : 'Portfolio Item'}
                        </span>
                        <h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                        >
                            {parse(data?.title?.rendered || "")}
                        </h1>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {data?.acf?.project_url && (
                                <a
                                    href={data.acf.project_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                                >
                                    Visit Project <span className="text-xl">↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-full">
                <div className="flex justify-center mx-auto px-5 py-5 -mt-20 relative z-30 w-full">
                    <div className="bg-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100">
                        <div className="space-y-2 text-center">
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Client</p>
                            <p className="text-xl font-bold text-gray-900">{data?.acf?.clients_name || 'N/A'}</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Project URL</p>
                            {data?.acf?.project_url ? (
                                <a href={data.acf.project_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-600 hover:underline truncate block">
                                    {new URL(data.acf.project_url).hostname}
                                </a>
                            ) : <p className="text-xl font-bold text-gray-900">N/A</p>}
                        </div>
                        <div className="space-y-2 text-center">
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Technologies</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {data?.acf?.project_technology?.map((tech, index) => (
                                    <span key={tech.id || index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mx-auto px-5 py-16 w-full">
                    <div
                        className="prose prose-lg prose-gray max-w-4xl mx-auto
                        prose-headings:font-bold prose-headings:text-gray-900 
                        prose-p:text-gray-700 prose-p:leading-relaxed 
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-10 prose-img:border prose-img:border-gray-200 prose-img:w-full
                        prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:pl-4 prose-blockquote:italic
                        "
                    >
                        {parse(data?.content?.rendered || "")}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <Vission />
            </div>
        </>
    )
}

export default SinglePortfolio;