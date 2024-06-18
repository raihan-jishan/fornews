const Heading = ({ title, fontSize , fontWeight , fixed}) => {
  return <h1 className={`${fontSize} text-black dark:text-white ${fontWeight} ${fixed ? 'sticky' : ''} top-0 dark:bg-black mt-5 m-4 capitalize  tracking-wide`}>{title}</h1>;
};

export default Heading;
