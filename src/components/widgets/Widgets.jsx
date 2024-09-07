import { useContext } from "react";
import { Context, Heading, NewsWidgets } from "../../utils/index";
import Homewidgets from "../widgets/HomeWidgets";
const Widgets = () => {
  const { news, widgetsNews, totalResults } = useContext(Context);

  return (
    <section id="home" className="dark:text-white dark:bg-black  ">
      <Homewidgets widgetsNews={widgetsNews} />
      {/* news card */}

      <Heading
        title={"All news"}
        fontSize={"text-5xl"}
        fontWeight={"font-bold"}
      />

     
        <NewsWidgets news={news} totalResults={totalResults} />
      
    </section>
  );
};

export default Widgets;
