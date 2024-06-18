import { NavLink } from "react-router-dom";
const NavigationList = ({ data, action, bg }) => {
  return (
    <NavLink
      to={"/"}
      className={`inline-block p-3 px-4   mt-0 text-lg font-bold rounded-full ${bg}  hover:scale-95 transition-all ml-2    `}
      onClick={action}
    >
      {" "}
      {data.name}
    </NavLink>
  );
};

export default NavigationList;
