import { ListCard } from "../../ui/card";

const NewsLists = ({ news, onSelectArticle }) => {
  return (
    <div className="max-w-4xl grid grid-cols-3 gap-5 p-2 max-lg:grid-cols-1">
      {news.map((item, index) => (
        <ListCard
          key={index}
          article={item}
          onClick={() => onSelectArticle(item)}
        />
      ))}
    </div>
  );
};

export default NewsLists;
