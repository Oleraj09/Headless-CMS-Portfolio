import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { Link } from 'react-router-dom';
import useFetch from '../ContextAPI/FetchApi';

const LatestWork = () => {
  const [data] = useFetch(
    "https://post.olerajhossin.top/wp-json/wp/v2/portfolio?acf_format=standard"
  );

  const latestPortfolio = Array.isArray(data) ? data.slice(0, 6) : [];

  return (
    <section className="container auto-center" id="portfolios">
      <p className="text-center" style={{ marginTop: "20px" }}>● Portfolio</p>
      <h2 className="section-title text-center">My Works</h2>
      <div className="works-grid">
        {!data || data.length === 0 ? (
          Array.from({ length: 6 }).map((_, i) => (
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
        ) : (
          latestPortfolio.map((work) => (
            <a
              href={`/portfolios-details/${work.id}`}
              className="work-card group"
              key={work.id}
            >
              <div className="work-number relative rounded-[25px]">
                <img
                  src={work.acf.project_thumbnail}
                  alt={work.title.rendered || "Portfolio Item"}
                  className="portfolio-img rounded-[15px]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#222] h-[50px] w-[50px] flex items-center justify-center rounded-full">
                    <button>
                      <FontAwesomeIcon
                        className="text-white text-[20px]"
                        icon={faArrowUpRightFromSquare}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-3 pt-3 pb-5">
                <span className="work-type leading-none italic">
                  For {work.acf.clients_name || "Client"}
                </span>
                <h3 className="work-title leading-none">
                  {work.title.rendered}
                </h3>
              </div>
            </a>
          ))
        )}
      </div>

      <div className="view-more">
        <Link to="/portfolios">
          Check out More → <span>View More</span>
        </Link>
      </div>
    </section>
  );
};

export default LatestWork;
