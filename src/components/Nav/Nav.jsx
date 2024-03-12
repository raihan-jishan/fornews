import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Context } from "../../context/newsContext.jsx";
import { navbarListData } from "../../utils/constant";
import Searchbar from "../Searchbar/Searchbar.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import Brand from "./Brand/Brand";
import NavList from "./NavList";
const Nav = () => {
  const [click, setClick] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  // openNavbar function
  const openNavbar = () => {
    setClick(!click);
  };
  // closeNavbar function
  const closeNavbar = () => {
    setClick(false);
  };
  // openSearchbar
  const openSearchbar = () => {
    setSearchbar(!searchbar);
  };
  // closeSearchbar
  const closeSearchbar = () => {
    setSearchbar(false);
  };
  // serachQuery handler function
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      selectedCategory?.length > 0
    ) {
      switch (type) {
        case "category":
          return setSelectedCategory(event);
        case "home":
          return setSelectedCategory(event);
        case "menu":
          return false;
        default:
          break;
      }
    }
  };

  return (
    <nav className="bg-zinc-100 border-zinc-200 dark:bg-zinc-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4 ">
        <div className="md:hidden block">
          {" "}
          {searchbar ? (
            <IoCloseOutline size={35} onClick={closeSearchbar} />
          ) : (
            <CiSearch
              size={30}
              className="text-zinc-900 dark:text-zinc-50"
              onClick={openSearchbar}
            />
          )}
        </div>
        <Brand />
       <div className="ml-20 max-lg:ml-0">
       <ThemeSwitcher />
       </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <div
            onClick={openNavbar}
            className="inline-flex items-center  w-10 h-10 justify-center   text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
          >
            {click ? (
              <IoCloseOutline size={40} />
            ) : (
              <HiMiniBars3BottomRight size={40} />
            )}
          </div>
        </div>
        {/* searchbar */}
        <div
          className={searchbar ? "m-auto mt-3" : "m-auto mt-3  max-lg:hidden "}
        >
          <Searchbar
            setSelectedCategory={setSelectedCategory}
            searchQueryHandler={searchQueryHandler}
            selectedCategory={selectedCategory}
          />
        </div>
        {/* close */}
        <div
          className={
            click
              ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
        >
          <ul className="flex flex-col font-medium p-8 md:p-0 mt-4   rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
            {navbarListData.map((data) => {
              return (
                <NavList data={data} key={data.id} closeNavbar={closeNavbar} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
