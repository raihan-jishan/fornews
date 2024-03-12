import React from "react";
import { NavLink } from "react-router-dom";

const NavList = ({ data , closeNavbar, handleThemeSwitch}) => {
  return (
    <li onClick={closeNavbar}>
      <NavLink
        className={(navInfo) =>
          navInfo.isActive
            ? "text-2xl  text-center capitalize block py-2 px-4 rounded-full p-2 text-zinc-900   mt-4 md:hover:text-zinc-300 md:dark:hover:text-zinc-300 dark:text-black   dark:hover:text-white   dark:border-zinc-700 hover:bg-gray-800 bg-zinc-300 font-bold"
            : "mt-4 text-xl text-center font-semibold capitalize block py-2 px-4 rounded-full p-2 text-zinc-900    md:hover:text-zinc-300 md:dark:hover:text-zinc-300   dark:hover:text-white   dark:border-zinc-700 hover:bg-gray-800 hover:scale-95 transition-all dark:text-zinc-50"
        }
        to={data.path} 
      >
        <span className="flex gap-2">
          {data.activeIcon} {data.name}
        </span>
      </NavLink>
    </li>
  );
};

export default NavList;
