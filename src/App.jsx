import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { useSiteSettings } from "./ContextAPI/SiteSettingContextAPI";
import Loader from "./components/Loader";
function App() {
  const site = useSiteSettings();
  if (!site) {
    return <Loader />
  }
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
