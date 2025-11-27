import Button from "../../../../../../backup of fornews/src/components/ui/button";
import Nav from "../../shared/nav";

const Hero = ({ article }) => {
  return (
    <div>
      <Nav />
      <HeroSection article={article} />
    </div>
  );
};

export default Hero;

function HeroSection({ article }) {
  if (!article) {
    return <p className="p-4">নিউজ লোড হচ্ছে বা সিলেক্ট করুন...</p>;
  }

  return ( 

    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto gap-10 lg:gap-8 xl:gap-0 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 place-self-center">
          <div className="flex items-center gap-3">
            <label className="font-medium font-Montserrat">
              {article.author}
            </label>
            <label className="text-gray-400">23 days ago</label>
          </div>

          <h1
            className="
        mt-4 
        text-3xl 
        font-Manrope 
        font-extrabold 
        leading-tight 
        md:text-5xl 
        xl:text-[2.8rem] 
        dark:text-white
      "
          >
            {article.title}
          </h1>

          <p
            className="
        mt-4
        font-medium 
        text-gray-700 
        dark:text-gray-400 
        font-Montserrat
        md:text-lg
        lg:text-base
      "
          >
            {article.description}
          </p>

          <div className="mt-6">
            <Button label="Read article" path={article.url}/>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt="mockup"
              className="rounded-lg w-full max-w-md mx-auto lg:mx-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
