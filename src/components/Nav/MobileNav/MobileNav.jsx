/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MobileNavData } from "../../../Data/Data.jsx";
import { AiOutlineClose } from "react-icons/ai";
const MobileNav = (props) => {
  const click = props.click;
  const handleClose = props.handleClose;
  return (
    <div>
      <nav
        className={
          click
            ? "fixed top-0 left-0 z-40 w-96 h-screen  overflow-y-auto transition-transform bg-black  transform-none max-lg:w-full"
            : "fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto  -translate-x-full bg-gray-500 transition-all"
        }
      >
        <button
          onClick={handleClose}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="
          sticky  
          text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white  "
        >
          <AiOutlineClose size={50} />
        </button>
        <ul className="block w-fit m-auto my-20  text-center transition-all text-white ">
          {MobileNavData.map((data) => {
            return (
              <li
                key={data.id}
                className="
              mb-2
              p-5 text-4xl hover:border-2 border-gray-500 transition-all duration-100 rounded-3xl"
              >
                <Link
                  to={`/${data.path}`}
                  className=" text-3xl font-Comfortaa font-medium"
                  onClick={handleClose}
                >
                  {data.headingNavIcon} {data.headingNavTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
