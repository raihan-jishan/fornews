import React, { useEffect, useState } from "react";
import Search from "../../ui/search";
import { ChevronRight } from "lucide-react";
import { NewsCard, RecommendedCard } from "../../ui/card";
import { Link } from "react-router-dom";
import { getNewsByCategory } from "../../../api/newsApi";

const Recommended = ({ onSelectArticle }) => {
  const categories = ["crypto", "business", "technology"];
  const [recommendedNews, setRecommendedNews] = useState([]);

  useEffect(() => {
    const fetchRecommended = async () => {
      let allArticles = [];

      for (const cat of categories) {
        const articles = await getNewsByCategory(cat, 3); // 3 per category
        allArticles = [...allArticles, ...articles];
      }

      setRecommendedNews(allArticles);
    };

    fetchRecommended();
  }, []);

  return (
    <div>
      <Search />

      <div className="flex items-center justify-between mt-1 p-2 font-Montserrat font-medium">
        <span className="text-xl tracking-tight">Recommended</span>
        <Link to={"/news"} className="flex items-center cursor-pointer">
          View all
          <ChevronRight />
        </Link>
      </div>

      <div className="max-w-6xl grid grid-cols-1 gap-5 p-2">
        {recommendedNews.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            onClick={() => onSelectArticle(article)}
          />
        ))}
      </div>

      <div className="">
        {recommendedNews.slice(0, 3).map((article, idx) => (
          <RecommendedCard
            key={idx}
            article={article}
            onClick={() => onSelectArticle(article)}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
