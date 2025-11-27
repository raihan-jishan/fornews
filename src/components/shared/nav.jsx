import React from "react";
import Logo from "../ui/logo";
import NavLink from "../ui/navLink";
import { navLinks } from "../../constants";
import { User } from "lucide-react";
const Nav = () => {
  return (
    <nav className="flex items-center gap-6 p-3 mt-3 sticky top-0 bg-gray-50 z-50">
      {/* Logo */}
      <Logo />

      {/* NAV LINKS - Scrollable on Mobile */}
      <div className="relative overflow-hidden flex-1">
        {/* Scrollable Nav */}
        <ul
          className="
      flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-2
      md:overflow-visible md:flex-row
    "
        >
          {navLinks.map((item) => (
            <li key={item.label} className="inline-block">
              <NavLink label={item.label} path={item.path} />
            </li>
          ))}
        </ul>

        {/* Gradient fade on right side */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-50 to-transparent md:hidden"></div>
      </div>

      {/* User Icon */}
      <div className="ml-auto">
        <User size={30} className="hover:scale-95 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
