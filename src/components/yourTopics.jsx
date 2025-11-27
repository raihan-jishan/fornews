import React from "react";
import { AllNewsCard } from "./ui/card";

const YourTopics = () => {
  return (
    <div>
      <div className="mt-4 ml-24">
        <h2 className="text-4xl font-medium font-Montserrat p-2">YourTopics</h2>
      </div>
      <div className="flex justify-center p-4 -mt-5">
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full   ">
          <AllNewsCard label={"U.S"} />
          <AllNewsCard label={"World"} />
          <AllNewsCard label={"Business"} />
          <AllNewsCard label={"Technology"} />
          <AllNewsCard label={"Entertainment"} />
          <AllNewsCard label={"Sports"} />
        </div>
      </div>
    </div>
  );
};

export default YourTopics;
