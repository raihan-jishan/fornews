import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../../utils/index";
import { SkeletonCard } from "../Card/Card";

const Newswidgets = ({ news }) => {
  return (
    <InfiniteScroll
      dataLength={news.length}
      hasMore={news.length !== news}
      loader={<SkeletonCard />}
    >
      <div
        className={`grid grid-cols-3 gap-2  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1 `}
      >
        {news.map((item) => (
          <div>
            {item.author ? (
              <Card
                title={item.title}
                description={item.description}
                imageUrl={
                  !item.urlToImage
                    ? "https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    : item.urlToImage
                }
                authorName={item.author}
                publishedDate={new Date(item.publishedAt).toDateString()}
                source={item.source.name}
                newsUrl={item.url}
                
              />
            ) : null}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Newswidgets;
