import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
    return () => {
      isMounted = false; 
    };
  }, [url]);
  return [data];
};
export default useFetch;
