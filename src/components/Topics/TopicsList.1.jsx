import { PiDiceThreeLight } from "react-icons/pi";

export const TopicsList = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="bg-gray-100 p-2 mt-2 rounded-2xl h-fit">
        <div className="transition-all cursor-pointer">
          <div className="absolute">
            <PiDiceThreeLight
              size={30}
              className="hover:scale-95 transition-all bg-transparentBlack-0 rounded-2xl " />
            <h1
              className="text-2xl capitalize text-gray-200 bg-gray-950 p-1 rounded-full px-2
            "
            >
              {props.topicsName}
            </h1>
          </div>
          <img
            src={!data.urlToImage
              ? "https://i.scdn.co/image/ab67616d00001e02f4660728f4913938e1890713"
              : data.urlToImage}
            alt="module not found!"
            className="w-96 rounded-2xl" />
          <div className="">
            <h1 className="text-left mt-3 text-xl">{data.title}</h1>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-Comfortaa font-semibold">
              {new Date(data.publishedAt).toDateString()}
            </span>



            <button className="bg-black  text-white rounded-full shadow-lg  p-2 px-4 hover:scale-95 transition-all">
              <a href={data.url} target="_blank" rel="noreferrer">
                Read more{" "}
              </a>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
