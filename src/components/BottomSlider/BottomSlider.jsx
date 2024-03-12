import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/newsContext";
import { sliderData } from "../../utils/constant";
import SliderList from "./SliderList";

const BottomSlider = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (!["/sources", "/trendingnews", ,].includes(location.pathname)) {
      setShow(true);
     
    } else {
      setShow(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  return (
    <>
      {show && (
        <div
          className="bg-zinc-100 overflow-auto whitespace-nowrap overflow-x-scroll   p-4 flex items-center justify-center max-lg:block dark:bg-zinc-900"
          id="sliderContainer"
        >
          {sliderData.map((data) => {
            return (
              <SliderList
                key={data.id}
                data={data}
                action={() => {
                  clickHandler(data.name, data.type);
                  navigate("/");
                }}
                bg={
                  selectedCategory === data.name
                    ? "bg-zinc-700 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-900 "
                    : "text-zinc-900 dark:text-zinc-100"
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BottomSlider;
