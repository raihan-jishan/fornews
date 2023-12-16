/* eslint-disable react/prop-types */
const RequestedNewsLists = (props) => {
  const { data } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img className="rounded-t-lg" src={data.urlToImage} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 font-Comfortaa">
            {data.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <p className="text-gray-200 m-2 ">
          {new Date(data.publishedAt).toDateString()}
        </p>

        <div className="flex items-center justify-between">
          <a href=""><i className="fa-light fa-list-timeline bg-gray-700 p-2 px-6 text-gray-200 text-3xl rounded-full"></i></a>
          <a
            href={data.url} 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-xl   text-center 
          bg-gray-600 text-gray-300 font-Comfortaa rounded-full font-semibold hover:scale-95 transition-all"
          >
            Read more
            <i className="fa-regular fa-book m-2 text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequestedNewsLists;
