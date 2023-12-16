/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RequestedNewsLists from "./RequestedNewsLists.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoReaderOutline } from "react-icons/io5";
const RequestedNews = (props) => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [totalResults, setTotalResults] = useState([]);
  useEffect(() => {
    RequestedNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (![`/`].includes(location.pathname)) {
      setShow(true);
    } else {
      setShow(false);
    }

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
  const fetchMoreData = async () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/api?q=${
      props.category
    }&apiKey=${import.meta.env.VITE_API_KEY}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="m-2">
      {show && (
        <div className="">
          <h1 className="m-12 text-3xl mt-5 font-Comfortaa font-semibold   flex ">
            Full coverage <IoReaderOutline size={35} />
          </h1>
        </div>
      )}
      <div className="mt-5">
        <h2 className="text-3xl font-Comfortaa text-right m-4 font-bold capitalize ">
          {" "}
          {props.Link}
        </h2>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div
          className="grid grid-cols-4 gap-5 mb-4 mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 "
        >
          {news.map((data) => {
            return (
              <div key={data.url}>
                <RequestedNewsLists data={data} key={data.url} />
              </div>
            );
          })}
        </div>

        {articles ? (
          <div className="flex items-center justify-end">
            <Link to={`/${props.Link}`}>
              <button className=" border-2 p-3   rounded-full text-2xl  mt-12 bg-gray-800 px-32 font-Comfortaa text-white  h-fit hover:scale-95 transition-all flex hover:bg-transparent hover:border-2 border-current  hover:bg-gray-700">
                Full coverage <BsArrowsFullscreen size={20} className="m-2" />
              </button>
            </Link>
          </div>
        ) : null}
      </InfiniteScroll>
    </div>
  );
};

export default RequestedNews;
