import { LuNewspaper } from "../utils/icons";
const AboutUs = () => {
  return (
    <section className="dark:bg-black p-24 dark:text-white bg-white">
      <div className="flex items-center  justify-center">
        <h2 className="text-6xl font-semibold capitalize">
          Updated with the daily news <span>with</span>
        </h2>
        <br />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold tracking-wide flex gap-4 mt-8 text-gray-900 dark:bg-gray-400/4s0 bg-gray-200/60 p-1 px-5 rounded-full">
          fornews <LuNewspaper size={50} />{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center mt-16">
        <h2 className="text-3xl font-semibold">more info ... work on  it..</h2>
      </div>
    </section>
  );
};

export default AboutUs;
