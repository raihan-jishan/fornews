import { NavLink } from "react-router-dom";
import { NavigationData } from "../../Data/Data.jsx";

const BottomNavigation = () => {
  return (
    <div>
      <ul className="max-lg:hidden flex items-center justify-center gap-4 mt-2 transition-all">
        {NavigationData.map((data) => (
          <li
            className="p-1 px-2 hover:bg-gray-100 cursor-pointer rounded-full"
            key={data.id}
          >
            <NavLink
              to={data.path}
              className={(navInfo) =>
                navInfo.isActive
                  ? "bg-gray-200 p-1 px-4 rounded-2xl text-xl font-bold"
                  : ""
              }
            >
              {data.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigation;
