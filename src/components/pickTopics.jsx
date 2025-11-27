import { useEffect, useState } from "react";
import { getTopHeadlines } from "../api/newsApi";
import { AllNewsCard } from "./ui/card";
  
const PickTopics = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTopHeadlines(10);
      setNews(data);
    };
    load();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-3xl font-Montserrat">Pick Topics</h2>
          <a href="/stories" className="text-blue-600 font-medium hover:underline">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {news.slice(0, 3).map((item, index) => (
            <AllNewsCard key={index} article={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickTopics;