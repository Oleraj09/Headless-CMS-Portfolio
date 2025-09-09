import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./module/Home";
import Blogs from "./module/Blogs/BlogPage";
import Portfolio from "./module/Portfolio/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import NotFound from './components/NotFound';

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
      <Route path="/portfolios" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
