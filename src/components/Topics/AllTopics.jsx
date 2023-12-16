import { Link } from "react-router-dom";
import { AllTopicsData } from "../../Data/Data";
import FetchTopics from "./FetchTopics";
const AllTopics = () => {
  return (
    <div
      className="grid grid-cols-4 gap-5 mb-4 mt-5 max-lg:grid-cols-1
    max-sm:flex-col max-sm:gap-3"
    >
      {AllTopicsData.map((data) => {
        return (
          <Link to={`/${data.category}`} key={data.id} target="_blank">
            <FetchTopics
              category={data.category}
              country={data.country}
              pageSize={data.pageSize}
              topicsName={data.topicsName}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default AllTopics;
