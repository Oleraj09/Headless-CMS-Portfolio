import { Link } from 'react-router-dom';
import useFetch from '../ContextAPI/FetchApi';

const Blogs = () => {
  const [data] = useFetch(
    "https://post.olerajhossin.top/wp-json/wp/v2/posts?acf_format=standard"
  );
  const latestBlogs = Array.isArray(data) ? data.slice(0, 3) : [];
  return (
    <section className="latest-works" id="blogs">
      <p className="text-center">● Blogs</p>
      <h2 className="section-title text-center">Latest News</h2>

      <div className="blogs-grid">
        {!data || data.length === 0 ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[25px] overflow-hidden border border-gray-200 animate-pulse"
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="px-3 pt-3 pb-5">
                <div className="h-4 bg-gray-300 w-1/2 rounded mb-3"></div>
                <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
              </div>
            </div>
          ))
        ) : (
          latestBlogs.map((work) => (
            <a
              href={`/blogs-details/${work.id}`}
              className="blog-card"
              key={work.id}
            >
              <div className="work-number rounded-[25px]">
                <img
                  src={work?.acf?.post_image?.url}
                  alt={work?.title?.rendered || "Blog Post"}
                  className="portfolio-img rounded-[10px]"
                />
              </div>
              <div className="px-3 pt-3 pb-5">
                <div className="text-[#fff] bg-[#222] rounded-[25px] px-3 inline-block text-[12px] md:text-[16px]">
                  {work?.acf?.category_name?.name || "General"}
                </div>
                <h3
                  className="work-title leading-[25px]"
                  style={{ margin: "10px 10px 0 0" }}
                >
                  {work?.title?.rendered?.length > 80
                    ? work.title.rendered.substring(0, 70) + "..."
                    : work.title.rendered}
                </h3>
              </div>
            </a>
          ))
        )}
      </div>

      <div className="view-more">
        <Link to="/blogs">
          Check out More → <span>View More</span>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
