import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ label, path }) => {
  return (
    <Link className="text-[1rem] font-medium  bg-white    p-2 px-3 rounded-full font-Montserrat hover:scale-95 transition-all" to={path}>
      {label}
    </Link>
  );
};
export default NavLink;
