import React from "react";
import Nav from "../components/shared/nav";

import PickTopics from "../components/pickTopics";
import YourTopics from "../components/yourTopics";

const News = () => {
  return (
    <div className="bg-gray-50">
      <Nav />

      <PickTopics />
      <YourTopics />
    </div>
  );
};

export default News;
