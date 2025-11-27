import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../api/newsApi";
import {AllNewsCard} from "../components/ui/card";

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getTopHeadlines(20); // 20 news load
      setStories(data);
    };
    fetchStories();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-Montserrat font-medium mb-4">
        Top Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((item, index) => (
          <AllNewsCard key={index} article={item} />
        ))}
      </div>
    </div>
  );
};

export default Story;
