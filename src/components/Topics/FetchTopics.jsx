/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TopicsList from "./TopicsList.jsx";
const FetchTopics = (props) => {
  const [news, setNews] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [totalResults, setTotalResults] = useState([]);
  useEffect(() => {
    RequestedNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const serverUrl = `${import.meta.env.VITE_SERVER_URL}/api?q=${
    props.category
  }&usa&pageSize=${props.pageSize}&apiKey=${import.meta.env.VITE_API_KEY}`;
  const RequestedNews = async () => {
    const url = serverUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setNews(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };
  return (
    <div>
      {news.map((data) => {
        return (
          <TopicsList
            data={data}
            key={data.url}
            topicsName={props.topicsName}
          />
        );
      })}
    </div>
  );
};

export default FetchTopics;
