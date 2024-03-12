//  TODO: cmplete the whole page . with the api request .
import React from "react";
import { NavLink } from "react-router-dom";
const SliderList = ({ data, action, bg }) => {
  return (
    <>
      <NavLink
        to={"/"}
        className={`inline-block p-2    text-xl font-bold rounded-full ${bg}  hover:scale-95 transition-all ml-2   px-2`}
        onClick={action}
      > {data.name}  
      </NavLink>
    </>
  );
};
export default SliderList;
