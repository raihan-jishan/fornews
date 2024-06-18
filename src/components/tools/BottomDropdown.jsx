import { useState } from "react";
import { ThemeSwitcher } from "../../utils/index";
import Searchbar from "../Searchbar/Searchbar";
const BottomDropdown = () => {
  // initialize state
  const [click, setClick] = useState(false);
  // showSearchbar function
  const showSearchbar = () => setClick(!click);

  // closeSearchbar function
  const closeSearchbar = () => setClick(false);
  return (
    <div
      className={
        click
          ? "fixed flex max-lg:-mr-4 bg-gray-900 p-2 text-gray-100 px-2 gap-1   mt-0  left-50 right-80 bottom-50 m-3 dark:bg-gray-900 dark:text-white  max-lg:rounded-sm rounded-full  max-lg:right-0   "
          : "fixed flex bg-gray-900 p-2 text-gray-100 px-2 gap-1   mt-0 left-50 right-0 bottom-0 m-3 dark:bg-gray-900 dark:text-white  rounded-full  "
      }
    >
      <ThemeSwitcher click={click} />
      <Searchbar
        showSearchbar={showSearchbar}
        closeSearchbar={closeSearchbar}
        click={click}
      />
    </div>
  );
};

export default BottomDropdown;
