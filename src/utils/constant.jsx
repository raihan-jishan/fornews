import { BiWorld } from "react-icons/bi";
import { CiHome } from 'react-icons/ci';
import { FaFlagUsa, FaHandHoldingHeart, FaRegUser } from "react-icons/fa";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { LuListMusic } from 'react-icons/lu';
import { MdOutlineScience, MdOutlineSportsVolleyball } from 'react-icons/md';
import { SiAudiotechnica } from "react-icons/si";
export const navListdata = [
  {
    id: 0,
    name: "All News",
    path: "/",
  },
  {
    id: 1,
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: 2,
    name: "Prodcast",
    path: "/prodcast",
  },
  {
    id: 3,
    name: "Analytics",
    path: "/analytics",
  },
  {
    id: 4,
    name: "Contacts",
    path: "/contactus",
  },
];

export const sliderData = [
  { id: 1, name: "All", icon:  <CiHome size={25}  />, type: "category" },
  { id: 2, name: "For you ", icon:  <FaRegUser size={25} />, type: "category" },
  { id: 3, name: "U.S.", icon: <FaFlagUsa size={25} />, type: "category" },
  { id: 4, name: "World", icon: <BiWorld size={25} />, type: "category" },
  { id: 5, name: "Business", icon: <FaMoneyBillWheat size={25}  />, type: "category" },
  { id: 6, name: "Technology", icon: <SiAudiotechnica size={25}/>, type: "category" },
  { id: 7, name: "Entertainment",  icon: <LuListMusic size={25}/>,type: "category" },
  { id: 8, name: "Sports", icon: <MdOutlineSportsVolleyball size={25} />, type: "category" },
  { id: 9, name: "Science", icon: <MdOutlineScience size={25}/>, type: "category" },
  { id: 10, name: "Health", icon: <FaHandHoldingHeart size={25} />, type: "category" },
];
