import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
export const ListCard = ({ article, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition"
    >
      <div className="flex items-center justify-between">
        <label className="text-gray-500">{article.author}</label>
      </div>

      <h5 className="mt-2 mb-3 text-xl font-semibold tracking-tight leading-8 w-[95%] hover:text-gray-700 transition-all">
        {article.title}
      </h5>
    </div>
  );
};

export const NewsCard = ({ article, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg hover:opacity-90 transition-all"
  >
    <div>
      <label className="text-sm text-gray-500">{article.author}</label>
      <h1 className="font-medium font-Montserrat text-lg mt-2 hover:text-gray-800">
        {article.title}
      </h1>
    </div>
    {article.urlToImage && (
      <div className="flex justify-center md:justify-end">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full max-w-[90%] rounded-md md:max-w-full"
        />
      </div>
    )}
  </div>
);

export const RecommendedCard = ({ article, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg hover:opacity-90 transition-all my-2"
  >
    <div>
      <label className="text-sm text-gray-500">{article.author}</label>
      <h1 className="font-medium font-Montserrat text-xl mt-2 hover:text-gray-800">
        {article.title}
      </h1>
    </div>
    {article.urlToImage && (
      <div className="flex justify-center">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full max-w-[95%] rounded-md"
        />
      </div>
    )}
  </div>
);
export const AllNewsCard = ({ label, article }) => {
  // dynamic category slug
  const slug = label ? label.toLowerCase() : null;

  return (
    <div className="mt-10 bg-white p-2">
      {label && (
        <Link
          to={`/category/${slug}`}
          className="flex items-center text-xl ml-3 border-b text-gray-800"
        >
          {label} <ChevronRight size={25} />
        </Link>
      )}

      {/* If article show */}
      {article && (
        <a href={article.url} target="_blank" className="block">
          <div
            className="
            max-w-xl mx-auto 
            grid grid-cols-1 md:grid-cols-2 
            gap-4 p-4 bg-white rounded-lg 
            hover:opacity-90 transition-all
          "
          >
            <div>
              <label className="text-sm text-gray-500">
                Author: {article.author || "Unknown"}
              </label>
              <h1 className="font-medium font-Montserrat text-lg mt-2">
                {article.title}
              </h1>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={article.urlToImage}
                className="w-full  rounded-md"
                alt={article.title}
              />
            </div>
          </div>
        </a>
      )}
    </div>
  );
};
