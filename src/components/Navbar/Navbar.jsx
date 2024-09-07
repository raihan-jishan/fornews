import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Button, NavList } from "../../utils";
import { navListdata } from "../../utils/constant";
import { HiBars3BottomRight, RxCross1 } from "../../utils/icons";
import Logo from "./Logo";

const Navbar = () => {
  // initialize State using useState
  const [click, setClick] = useState(false);
  // open mobile menu when link is clicked
  const openMobileMenu = () => setClick(!click);
  // close mobile menu when link is clicked
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="bg-white dark:bg-black   w-full z-20  start-0  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            url={"/account"}
            name={"account"}
            px={"px-16 "}
            fontSize={"text-[1rem]"}
            icon={<MdOutlineAccountCircle size={25} />}
            roundedMedium
            mobilePadding={"max-lg:px-6"}
          />

          {/* for mobile devices */}
          <div className="md:hidden cursor-pointer">
            {click ? (
              <RxCross1
                size={35}
                onClick={closeMobileMenu}
                className="text-black dark:text-white"
              />
            ) : (
              <HiBars3BottomRight
                size={35}
                onClick={openMobileMenu}
                className="text-black dark:text-white"
              />
            )}
          </div>
          {/* close */}
        </div>
        <div
          className={
            click
              ? "items-center justify-between  w-full md:flex md:w-auto md:order-1 transition-all ease-linear font-bold shadow-lg"
              : "items-center justify-between  w-full md:flex md:w-auto md:order-1 hidden transition-all ease-linear "
          }
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black ">
            {navListdata.map((item, index) => {
              return (
                <NavList
                  key={index}
                  name={item.name}
                  closeMobileMenu={closeMobileMenu}
                  path={item.path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
