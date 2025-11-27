import { useState, useEffect } from "react";
import { getTopHeadlines } from "../api/newsApi";
import Hero from "../components/shared/widgets/hero";
import NewsLists from "../components/shared/widgets/newsLists";
import Recommended from "../components/shared/widgets/recommended";

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getTopHeadlines(6); // 6 articles
      setNews(articles);
      setSelectedNews(articles[0]); // Hero first article
    };

    fetchNews();
  }, []);

  return (
    <div>
  <div className="max-w-screen-xl mx-auto px-3">

  {/* Grid layout for Hero + Recommended */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

    {/* Hero Section */}
    <div className="lg:col-span-8">
      <Hero article={selectedNews} />
    </div>

    {/* Recommended Sidebar */}
    <div className="lg:col-span-4 lg:sticky lg:top-6 lg:max-h-screen lg:overflow-y-auto">
      <Recommended onSelectArticle={setSelectedNews} />
    </div>

  </div>

  {/* News List Section */}
  <div className="-mt-[4rem] max-w-5xl  ">
    <NewsLists news={news} onSelectArticle={setSelectedNews} />
  </div>

</div>

    </div>
  );
};

export default Home;
