import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const baseUrl = "https://olerajhossin.top";
    const routes = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/portfolios", changefreq: "weekly", priority: 0.8 },
      { url: "/blogs", changefreq: "weekly", priority: 0.8 },
    ];

    console.log("Fetching dynamic routes...");

    // Fetch Posts
    try {
      const postsResponse = await axios.get("https://post.olerajhossin.top/wp-json/wp/v2/posts?_embed&acf_format=standard&per_page=100");
      postsResponse.data.forEach((post) => {
        routes.push({
          url: `/blogs-details/${post.id}`,
          changefreq: "monthly",
          priority: 0.6,
        });
      });
      console.log(`Fetched ${postsResponse.data.length} blog posts.`);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }

    // Fetch Portfolios
    try {
      const portfoliosResponse = await axios.get("https://post.olerajhossin.top/wp-json/wp/v2/portfolio?acf_format=standard&per_page=100");
      portfoliosResponse.data.forEach((portfolio) => {
        routes.push({
          url: `/portfolios-details/${portfolio.id}`,
          changefreq: "monthly",
          priority: 0.7,
        });
      });
      console.log(`Fetched ${portfoliosResponse.data.length} portfolio items.`);
    } catch (error) {
      console.error("Error fetching portfolios:", error.message);
    }

    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    const writeStream = createWriteStream(
      path.resolve(__dirname, "..", "public", "sitemap.xml")
    );

    routes.forEach((route) => {
      sitemapStream.write(route);
    });

    sitemapStream.end();

    const data = await streamToPromise(sitemapStream);
    writeStream.write(data.toString());

    console.log("✅ sitemap.xml generated at /public/sitemap.xml");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();
