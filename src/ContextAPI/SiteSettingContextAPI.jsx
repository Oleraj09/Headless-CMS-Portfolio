import { createContext, useContext } from "react";
import useFetch from "./FetchApi";
const SiteSettingsContext = createContext();
export const SiteSettingContextAPI = ({ children }) => {
  const [data] = useFetch(
    "https://post.olerajhossin.top/wp-json/wp/v2/site-setting?acf_format=standard&per_page=1&orderby=date&order=desc"
  );
  const site = Array.isArray(data) && data.length > 0 ? data[0] : null;
  return (
    <SiteSettingsContext.Provider value={site}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => {
  return useContext(SiteSettingsContext);
};
