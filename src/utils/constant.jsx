import { CiSettings } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";
// navbar list data
export const navbarListData = [
  { id: 1, name: "home", path: "/", activeIcon: <IoHomeOutline size={28} /> },
  {
    id: 2,
    name: "trending news",
    path: "/trendingnews",
    activeIcon: <PiNewspaperClippingLight size={28} />,
  },
  {
    id: 3,
    name: "settings",
    path: "/settings",
    activeIcon: <CiSettings size={28} />, 
  },
];
// sliderData infos
export const sliderData = [
  { id: 1, name: "top", type: "category" },
  { id: 2, name: "business ", type: "category" },
  { id: 3, name: "tech", type: "category" },
  { id: 4, name: "vehicle", type: "category" },
  { id: 5, name: "health", type: "category" },
  { id: 6, name: "entertainment", type: "category" },
  { id: 7, name: "war", type: "category" },
  { id: 8, name: "new for me", type: "category" },
  { id: 9, name: "top lines", type: "category" },
  { id: 10, name: "rich mans", type: "category" },
  { id: 11, name: "crypto", type: "category" },
];
