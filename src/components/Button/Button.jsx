import { Link } from "react-router-dom";

const Button = ({
  name,
  fontSize,
  px,
  roundedMedium,
  roundedFull,
  mobilePadding,
  url,
  redirect,
  icon
}) => {
  return (
    <Link
      to={url}
      target={`${redirect ? "_blank" : ""}`}
      className={`bg-black text-white p-[0.6rem] w-full cursor-pointer dark:bg-gray-100 dark:text-black  ${px} ${fontSize} capitalize font-semibold ${
        roundedMedium
          ? "rounded-lg"
          : roundedFull
          ? "rounded-full"
          : "rounded-sm"
      } hover:scale-95 dark:hover:bg-[#ccc] flex gap-5  items-center justify-center text-center transition-all ${mobilePadding} max-lg:gap-1`}
    >
      {name} {icon}
    </Link>
  );
};

export default Button;
