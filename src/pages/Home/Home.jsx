import { PiNewspaperClippingThin } from "react-icons/pi";
import RequestedNews from "../../components/RequestedNews/RequestedNews.jsx";
import AllTopics from "../../components/Topics/AllTopics.jsx";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-left text-3xl mt-5 ml-5 font-Comfortaa font-medium bg-gray-50 p-2 rounded-full">
        Top lines
      </h1>
      <span className="ml-5">{new Date().toDateString()}</span>
      <RequestedNews
        category={"top-headlines"}
        country={"usa"}
        pageSize={"5"}
        Link="top-headlines"
      />
      <h1 className="text-left text-3xl mt-5 ml-5 font-Comfortaa font-medium   p-2 rounded-full flex">
        More News <PiNewspaperClippingThin size={50} />
      </h1>
      <RequestedNews
        category={"heading"}
        country={"usa"}
        pageSize={"20"}
        Link="more-foryou"
      />
      <h1 className="text-left text-4xl mt-5 flex">
        Topics For you <PiNewspaperClippingThin size={50} />
      </h1>
      <AllTopics />
      <h1></h1>
    </div>
  );
};

export default Home;
