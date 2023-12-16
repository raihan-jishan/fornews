import { Routes as Router, Route as Routing } from "react-router-dom";
import Home from "../pages/Home/Home";
import RequestedNews from "../components/RequestedNews/RequestedNews";
import { AllTopicsData } from "../Data/Data";
const Routes = () => {
  return (
    <Router>
      <Routing path="/" element={<Home />} />
      <Routing
        path="/top-headlines"
        element={
          <RequestedNews category={"top"} country={"usa"} pageSize={"40"} />
        }
      />
      <Routing
        path="/more-foryou"
        element={
          <RequestedNews category={"top"} country={"usa"} pageSize={"60"} />
        }
      />
      {/* topics data routing */}
      {AllTopicsData.map((data) => {
        return (
          <Routing
            key={data.id}
            path={`/${data.category}`}
            element={
              <RequestedNews
                category={data.category}
                country={data.category}
                pageSize={data.separatePageSize}
              />
            }
          />
        );
      })}
      {/* end */}
    </Router>
  );
};

export default Routes;
