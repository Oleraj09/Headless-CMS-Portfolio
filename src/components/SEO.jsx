import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Oleraj Hossin` : "Oleraj Hossin"}</title>
            <meta name="description" content={description || "Personal portfolio and blog of Oleraj Hossin."} />
            <meta property="og:title" content={title || "Oleraj Hossin"} />
            <meta property="og:description" content={description || "Personal portfolio and blog of Oleraj Hossin."} />
            <meta property="og:image" content={image || "/default-og-image.jpg"} />
            <meta property="og:url" content={url || window.location.href} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || "Oleraj Hossin"} />
            <meta name="twitter:description" content={description || "Personal portfolio and blog of Oleraj Hossin."} />
            <meta name="twitter:image" content={image || "/default-og-image.jpg"} />
        </Helmet>
    );
};

export default SEO;
