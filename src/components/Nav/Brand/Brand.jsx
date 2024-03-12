import React from 'react';
import { HiOutlineNewspaper } from "react-icons/hi2";
const Brand = () => {
  return (
    <div>
          <a
          href=""
          className="flex items-center  text-zinc-900 dark:text-zinc-50"
        >
          <HiOutlineNewspaper size={40}/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-zinc-50 ">
            forNews
          </span>
        </a>
    </div>
  )
}

export default Brand;