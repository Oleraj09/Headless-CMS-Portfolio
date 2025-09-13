import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const baseUrl = "https://olerajhossin.top";
    const routes = [
      "/",            
      "/portfolios",   
      "/blogs",        
    ];

    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    const writeStream = createWriteStream(
      path.resolve(__dirname, "..", "public", "sitemap.xml")
    );

    routes.forEach((url) => {
      sitemapStream.write({
        url,
        changefreq: "weekly", 
        priority: 0.7          
      });
    });

    sitemapStream.end();

    await streamToPromise(sitemapStream).then((data) =>
      writeStream.write(data.toString())
    );

    console.log("✅ sitemap.xml generated at /public/sitemap.xml");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();
