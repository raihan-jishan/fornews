import { Link } from "react-router-dom";


const NavList = ({name, closeMobileMenu, path}) => {
  return (
    <li>
    <Link
      to={path}
      className="block hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-300 hover:scale-95 transition-all py-2 px-3 text-black font-semibold text-[1.2rem] rounded md:bg-transparent  md:p-0 dark:text-white max-lg:mt-2 max-lg:text-[1.5rem]"
      onClick={closeMobileMenu}
    >
      {name}
    </Link>
  </li>
  )
}

export default NavList;