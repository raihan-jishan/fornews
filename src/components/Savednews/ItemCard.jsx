import { Link } from "react-router-dom";
const ItemCard = ({ name, icon, fontSize, fontWeight , roundedFull , roundedMedium}) => {
  return (
    <div
      className={`bg-gray-100 text-black font-semibold px-8    dark:bg-gray-200 p-6 hover:scale-95 transition-all ${
        roundedMedium
          ? "rounded-md"
          : roundedFull
          ? "rounded-full"
          : "rounded-sm"
      }   ${fontWeight} ${fontSize}`}
    >
      <Link to={""} className="flex gap-5 flex-col-reverse">
        {name} <span className="flex items-center justify-center">
        {icon}
        </span>
      </Link>
    </div>
  );
};

export default ItemCard;
