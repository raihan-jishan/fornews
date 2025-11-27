import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../api/newsApi";
import { AllNewsCard } from "../components/ui/card";

const CategoryPage = () => {
  const { name } = useParams(); // world, business, sports etc.
  const [news, setNews] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getNewsByCategory(name, 20);
      setNews(data);
    };
    load();
  }, [name]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-medium font-Montserrat capitalize mb-4">
        {name} News
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <AllNewsCard key={i} article={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
