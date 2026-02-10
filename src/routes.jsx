import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./module/Home";
import Blogs from "./module/Blogs/BlogPage";
import Portfolio from "./module/Portfolio/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import NotFound from './components/NotFound';
import SinglePortfolio from "./module/Portfolio/SinglePortfolio";
import SingleBlog from "./module/Blogs/SingleBlog";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <InnerRoutes />
    </>
  );
};

const InnerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs-details/:id" element={<SingleBlog />} />
      <Route path="/portfolios" element={<Portfolio />} />
      <Route path="/portfolios-details/:id" element={<SinglePortfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
