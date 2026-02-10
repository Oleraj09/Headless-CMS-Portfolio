import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
function App() {
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
