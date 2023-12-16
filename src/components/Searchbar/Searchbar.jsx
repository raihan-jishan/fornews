/* eslint-disable react/prop-types */

import { IoIosSearch } from "react-icons/io";
const Searchbar = (props) => {
  const handleOpen = props.handleOpen;
  const search = props.search;
  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
        >
          Search
        </label>
        <div className="relative w-96 max-md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoIosSearch size={30} className="mr-3" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-xl bg-gray-100 rounded-full "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium    px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-blue-800 rounded-full text-xl hover:scale-95 transition-all"
          >
            Search
          </button>
        </div>

        {/* mobile searchbar */}
        {search ? (
          <div className="relative w-70  flex-col ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoIosSearch size={30} className="mr-3" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-xl  bg-gray-100 rounded-full "
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        ) : null}
      </form>
      <label
        htmlFor="email"
        className="relative   py-3 
          rounded-full hidden  max-md:block
          "
      >
        {search ? (
          <div className="px-10 bg-gray-800 p-1 rounded-full text-gray-100 text-center text-5xl hover:scale-95 transition-all">
            <i className="fa-sharp fa-light fa-xmark" onClick={handleOpen}></i>
          </div>
        ) : (
          <div className="px-10 bg-gray-800 p-1 rounded-full text-gray-100  text-2xl  transition-all hover:scale-80">
            <i
              className="fa-regular fa-magnifying-glass "
              onClick={handleOpen}
            ></i>
          </div>
        )}
      </label>
    </div>
  );
};

export default Searchbar;
