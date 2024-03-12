import React, { useContext } from "react";
import NewsCard from "../components/NewsCard/NewsCard.jsx";
import { Context } from "../context/newsContext.jsx";
const Home = () => {
  const { news} = useContext(Context);
  return (
    <div
      className="grid grid-cols-3 gap-4  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1 shadow-xl"
    >
      {news.map((data) => {
        return (
          <NewsCard
            key={data.url}
            url={data.url}
            imageUrl={data.urlToImage}
            title={data.title}
            content={data.content}
            date={new Date(data.publishedAt).toDateString()}
          />
        );
      })}
    </div>
  );
};

export default Home;
