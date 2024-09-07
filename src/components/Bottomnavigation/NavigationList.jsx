import { NavLink } from "react-router-dom";
const NavigationList = ({ data, action, bg , icon}) => {
  return (
    <NavLink
      to={"/"}
      className={`inline-block p-3 px-4   mt-0 text-lg font-bold rounded-full ${bg}  hover:scale-95 transition-all ml-2    `}
      onClick={action}
    >
      {" "}
      <span className="flex gap-1">
      {icon} {data.name} 
      </span>
    </NavLink>
  );
};

export default NavigationList;
