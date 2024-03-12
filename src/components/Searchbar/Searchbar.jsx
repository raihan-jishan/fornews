import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ({
  setSelectedCategory,
  searchQueryHandler,
  selectedCategory,
}) => {
  return (
    <>
      <div className="relative flex items-center justify-center ">
        <input
          type="search"
          className="w-full rounded-full relative m-0 block flex-auto   bg-zinc-200 dark:bg-zinc-700  dark:text-zinc-50 bg-clip-padding px-5 py-3 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10  dark:autofill:shadow-autofill dark:focus:border-primary placeholder:font-bold placeholder:text-lg "
          placeholder="Search"
          onChange={(e) => setSelectedCategory(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={selectedCategory}
        />

        <span className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-zinc-50  ">
          <IoSearchOutline size={25} />
        </span>
      </div>
    </>
  );
};

export default Searchbar;
