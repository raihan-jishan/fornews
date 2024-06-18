import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Context } from "../../context/newsContext";
import { sliderData } from "../../utils/constant";
import NavigationList from "./NavigationList";
const Bottomnavigation = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  // define the state
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  // useEffect hook
  useEffect(() => {
    if (!["/account", "/aboutus", "/contactus"].includes(location.pathname)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <div>
      {show && (
        <div
          className="bg-white overflow-auto whitespace-nowrap overflow-x-scroll    p-2 flex items-center justify-center max-lg:block dark:bg-black"
          id="sliderContainer"
        >
          {sliderData.map((data) => {
            return (
              <NavigationList
                key={data.id}
                data={data}
                action={() => {
                  clickHandler(data.name, data.type);
                  navigate("/");
                }}
             
                bg={
                  selectedCategory === data.name
                    ? "bg-black text-white dark:bg-white dark:text-black" // for active links
                    : "bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Bottomnavigation;
