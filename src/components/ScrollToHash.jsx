import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Use setTimeout to wait for the element to be rendered
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Optionally scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
