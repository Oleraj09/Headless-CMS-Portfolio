import { useParams } from "react-router-dom";
import useFetch from "../../ContextAPI/FetchApi";
import TitleBar from "../../components/TitleBar";
import Vission from "../Vission";
import portfolioImg from "../../assets/portfolio.jpg";
import Loader from "../../components/Loader";
const SingleBlog = () => {
    const {id} = useParams();
    const [data] = useFetch(`https://post.olerajhossin.top/wp-json/wp/v2/posts/${id}/?_embed&acf_format=standard`);
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
                            <span className="capitalize">Post Title:</span> <span className="italic text-[#274196]">{data?.title?.rendered}</span>
                        </div>
                        <div className="client-name text-[20px] pb-2">
                            <span className="capitalize">Author Name:</span> <span className="italic text-[#274196]">{data?._embedded?.author[0].name}</span>
                        </div>
                        <div className="project-name text-[20px] pb-2">
                            <span className="capitalize">Technology: </span> <span className="italic">
                                {data?.acf?.category_name.name}
                            </span>
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

export default SingleBlog;