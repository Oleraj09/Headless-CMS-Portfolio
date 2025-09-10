import { useParams } from "react-router-dom";
import useFetch from "../../ContextAPI/FetchApi";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import Loader from "../../components/Loader";
const SinglePortfolio = () => {
     const { id } = useParams();
    const [data] = useFetch(`https://post.olerajhossin.top/wp-json/wp/v2/portfolio/${id}/?acf_format=standard`);
    if(!data) return <Loader />
    return (
        <>
            <div className="x">
                <TitleBar
                    bgImg={portfolioImg}
                    title={data?.title.rendered}
                />
                <div className="container" style={{ margin: "auto" }}>
                    <div className="pt-10 pb-10">
                        <div className="project-name text-[20px] pb-2">
                            <span className="capitalize">Project Name:</span> <span className="italic text-[#274196]">{data?.title.rendered}</span>
                        </div>
                        <div className="client-name text-[20px] pb-2">
                            <span className="capitalize">Client Name:</span> <span className="italic text-[#274196]">{data?.acf?.clients_name}</span>
                        </div>
                        <div className="project-name text-[20px] pb-2">
                            <span className="capitalize">Technology: </span> <span className="italic">
                                {data?.acf?.project_technology?.map((tech, index) => (
                                    <span className="text-[#274196]" key={tech.id || index}>
                                        {tech.name}{index < data.acf.project_technology.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </span>
                        </div>
                         <div className="client-name text-[20px] pb-2">
                            <span className="capitalize">Link:</span> <a href={data?.acf?.project_url}><span className="text-[#274196]">Click & Go</span> <span className="inline-block rotate-[90deg]">&#x2196;</span></a>
                        </div>
                    </div>
                    <div className="show-content pb-32"
                    dangerouslySetInnerHTML={{ __html: data?.content?.rendered || "" }}
                    ></div>
                </div>
                <Vission />
            </div>

        </>
    )
}

export default SinglePortfolio;