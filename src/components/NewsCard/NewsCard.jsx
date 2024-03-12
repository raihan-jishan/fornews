import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavigateBtn } from "../Button/Button";
const NewsCard = ({ imageUrl, title, content, date, url }) => {
  return (
    <div>
      <div className="w-fit bg-base-100 shadow-xl bg-zinc-900 text-zinc-200 rounded-2xl">
        <div>
          <img
            className="rounded-t-xl"
            src={
              imageUrl
                ? imageUrl
                : "https://miro.medium.com/v2/resize:fit:679/1*xAUnGJlMvI622sjInCO6Bg.gif"
            }
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title m-4 text-xl  font-bold">{title}</h2>
          <p className="mt-1 p-3 tracking-wide">{content}</p>
          <div className="flex item-center justify-between  m-2">
            <span className="m-1 text-lg font-semibold hover:bg-zinc-800">
              {date}
            </span>
            <span className="hover:scale-95 transition-all hover:bg-zinc-700 rounded-xl cursor-pointer">
              <IoIosHeartEmpty size="40" />
            </span>
          </div>
          <div className="flex item-center justify-center p-2">
            <NavigateBtn
              text={"read more"}
              bg={"bg-zinc-400"}
              width={"full"}
              icon={<FaBookBookmark size="30" />}
              fontSize={"xl"}
              fontWeight={"bold"}
              rounded={"full"}
              style={"text-black"}
              link={url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
