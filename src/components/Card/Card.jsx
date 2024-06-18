import { Button } from "../../utils/index";
const Card = ({ imageUrl, title, description , authorName, publishedDate, source, newsUrl}) => {
  return (
    <div className="  rounded overflow-hidden shadow-lg p-5">
      <img className="w-full rounded-lg  " src={imageUrl} alt="Sunset in the mountains" />
      <div className=" flex gap-0 m-2 items-center justify-between">
        <span className="inline-block   rounded-full px-0 py-1 text-[1rem] font-bold text-gray-700 dark:text-gray-300 mr-2 mb-2">
        {authorName}
        </span>
        <span className="inline-block   rounded-full py-2 text-[0.9rem] font-bold text-gray-700 dark:text-gray-300 mr-2 mb-2">
       {publishedDate}
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{title}</div>
        <p className="text-gray-700 text-[1.1rem] dark:text-gray-300 ">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         {source}
        </span>
      </div>
     <div className="mt-2 flex items-center justify-center text-center">
     <Button name={"Read full"} px={"px-[4.5rem]"} roundedFull url={newsUrl} redirect/>
     </div>
    </div>
  );
};

export default Card;
