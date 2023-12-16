import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Searchbar from "../Searchbar/Searchbar.jsx";
import Brand from "./Brand/Brand.jsx";
import MobileNav from "./MobileNav/MobileNav.jsx";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [search, setSearch] = useState(false);
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setSearch(!search);
  };
  const handleClick = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(false);
  };
  return (
    <div>
      <header
        className={`flex items-center justify-between m-3 ${
          search ? "max-lg:flex-col" : "null"
        }`}
      >
        <Brand />
        <Searchbar search={search} handleOpen={handleOpen} />
        {/* for mobile responsibe design  */}
        {search ? null : (
          <div
            className="sm:hidden block transition-all duration-200"
            onClick={handleClick}
          >
            {click ? (
              <AiOutlineClose className="text-black" size={40} />
            ) : (
              <HiBars3BottomRight className="text-black" size={40} />
            )}
          </div>
        )}
        <nav className="max-lg:hidden ">
          <ul className="flex items-center gap-4 transition-all">
            <li>
              <IoMdHelpCircleOutline
                size={30}
                className="rounded-full hover:bg-gray-200 "
              />
            </li>
            <li>
              <IoSettingsOutline
                size={30}
                className="rounded-full hover:bg-gray-200 "
              />
            </li>
            <li>
              <FaRegUser
                size={30}
                className="rounded-full hover:bg-gray-200 "
              />
            </li>
          </ul>
        </nav>
      </header>

      <MobileNav click={click} handleClose={handleClose} />

      {/* close */}
    </div>
  );
};

export default Nav;
