import React, { useContext } from 'react';
import { IoIosTrendingUp } from "react-icons/io";
import NewsCard from '../components/NewsCard/NewsCard';
import { Context } from '../context/newsContext';
function Sources() {
  const { trending} = useContext(Context);
  return (
    <div>
      <h1 className='text-center text-3xl mt-5 font-semibold tracking-wider flex items-center justify-center gap-3'><IoIosTrendingUp  size={50} className='text-zinc-700 dark:text-zinc-200'/>Trending news</h1>
      {/* return the card's */}
      <div
      className="grid grid-cols-3 gap-4  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1 shadow-xl"
    >
      {trending.map((data) => {
        return (
          <NewsCard
            key={data.url}
            url={data.url}
            imageUrl={data.urlToImage}
            title={data.title}
            content={data.content}
            date={new Date(data.publishedAt).toDateString()}
          />
        );
      })}
    </div>
      {/* close */}
    </div>
  )
}

export default Sources;