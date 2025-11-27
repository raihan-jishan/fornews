import { useEffect, useState } from "react";
import { getTopHeadlines, getNewsByCategory } from "../api/newsApi";

export const useNews = (category = null) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      let data;

      if (category) {
        data = await getNewsByCategory(category);
      } else {
        data = await getTopHeadlines();
      }

      setNews(data.articles || []);
      setLoading(false);
    };

    fetchNews();
  }, [third]);

  return { news, loading };
};
