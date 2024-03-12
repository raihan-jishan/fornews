import { createContext, useEffect, useState } from "react";
export const Context = createContext();
export const AppContext = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("news");
  useEffect(() => {
    setLoading(true);
    RequestedNews(selectedCategory);
    trendingNews();
  }, [selectedCategory]);
  const RequestedNews = async (query) => {
    const serverUrl = `${
      import.meta.env.VITE_SERVER_URL
    }/api?q=${query}&usa&pageSize=${80}&apiKey=${import.meta.env.VITE_API_KEY}`;

    const url = serverUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setNews(parsedData.articles);
  };
  // trendingNews function
  const trendingNews = async () => {
    const serverUrl = `${
      import.meta.env.VITE_SERVER_URL
    }/api?q=trending&usa&pageSize=${80}&apiKey=${import.meta.env.VITE_API_KEY}`;

    const url = serverUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTrending(parsedData.articles);
  };
  return (
    <Context.Provider
      value={{
        news,
        setNews,
        trending,
        selectedCategory,
        setSelectedCategory,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
