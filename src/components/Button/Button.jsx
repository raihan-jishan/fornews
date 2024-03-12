import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  text,
  width,
  icon,
  path,
  fontWeight,
  fontSize,
  style,
  bg,
  rounded,
}) => {
  return (
    <Link
      to={path}
      className={`p-2 text-center flex
       items-center justify-center px-6 font-${fontWeight}  ${bg} hover:scale-95 transition-all  text-${fontSize} rounded-${rounded} ${style} flex gap-3 w-${width}  `}
    >
      {text} {icon}
    </Link>
  );
};
export const NavigateBtn = ({
  text,
  width,
  icon,
  link,
  fontWeight,
  fontSize,
  style,
  bg,
  rounded,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="norreffer"
      className={`p-2 text-center flex
       items-center justify-center px-6 font-${fontWeight}  ${bg} hover:scale-95 transition-all  text-${fontSize} rounded-${rounded} ${style} flex gap-3 w-${width}  `}
    >
      {text} {icon}
    </a>
  );
};
