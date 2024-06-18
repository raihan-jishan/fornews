import { createContext, useEffect, useState } from "react";
export const Context = createContext();
export const AppContext = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [widgetsNews, setWidgetsNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    setLoading(true);
    RequestedNews(selectedCategory);
    homeWidgetsNews(selectedCategory);
  }, [selectedCategory]);
  // requested news
  const RequestedNews = async (query) => {
    const serverUrl = `${
      import.meta.env.VITE_SERVER_URL
    }/api?q=${query}&usa&pageSize=${80}&apiKey=${import.meta.env.VITE_API_KEY}`;

    const url = serverUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    setNews(parsedData.articles);
  };

  // homeWidgetsNews function
  const homeWidgetsNews = async (query) => {
    const serverUrl = `${import.meta.env.VITE_SERVER_URL}/api?q=${
     query
    }&usa&pageSize=${1}&apiKey=${import.meta.env.VITE_API_KEY}`;

    const url = serverUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setWidgetsNews(parsedData.articles);
  };

 
  return (
    <Context.Provider
      value={{
        news,
        setNews,
        widgetsNews,
        selectedCategory,
        setSelectedCategory,
       
        totalResults,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
