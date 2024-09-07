import { useEffect, useState } from "react";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdOutlineVerified } from "../../utils/icons";
import { Button } from "../../utils/index";
const Homewidgets = ({ widgetsNews }) => {
  const [position, setPosition] = useState("");
  useEffect(() => {
    const changePosition = () => {
      if (window.scrollY >= 90) {
        setPosition("");
      } else {
        setPosition("relative");
      }
    };
    window.addEventListener("scroll", changePosition);
  }, []);
  return (
    <div>
      {widgetsNews.map((item, index) => (
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          key={index}
        >
          <div class="  lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={
                !item.urlToImage
                  ? "https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  : item.urlToImage
              }
              alt="mockup"
              className="w-[100%] h-full"
            />
          </div>

          <div class="ml-auto place-self-center lg:col-span-7 transition-all duration-500 ease-linear">
            {/* avater */}
            <div
              className={`-top-8 max-lg:top-12 max-lg:mt-10 ${position} max-lg:m-5   `}
            >
              <div className="flex  gap-3">
                {/* avater image */}
                <img
                  src={
                    !item.urlToImage
                      ? "https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      : item.urlToImage
                  }
                  alt="avater image was not found!"
                  className="w-10 h-10 rounded-full"
                />

                {/* avater name */}
                <h1 className="font-semibold text-xl">{item.author}</h1>

                {/* publish date */}
                <h3 className="font-semibold text-sm mt-1">12minutes ago</h3>

                {/* verified avater */}
                <MdOutlineVerified
                  size={30}
                  className=" text-black dark:text-gray-200"
                />
              </div>
            </div>

            <h1 class="max-w-2xl mb-4   font-extrabold tracking-tight leading-none  text-4xl dark:text-gray-200 max-lg:mt-5 ">
              {item.title}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {item.description}
            </p>
            {/* button */}
            <Button
              name={"read "}
              px={"px-20"}
              roundedMedium
              icon={<PiReadCvLogoFill size={25} />}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homewidgets;
