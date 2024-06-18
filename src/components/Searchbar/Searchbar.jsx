import { IoSearchOutline, RxCross1 } from "../../utils/icons";
import { Button } from "../../utils/index";
const Searchbar = ({ showSearchbar, closeSearchbar, click }) => {
  return (
    <div className="flex  ">
      {click ? (
        <RxCross1 size={35} onClick={closeSearchbar} className="m-2" />
      ) : (
        <IoSearchOutline size={35} onClick={showSearchbar} />
      )}

      {/* searchbox */}
      <div
        className={
          click ? "w-full p-2 px-10 max-lg:w-full max-lg:px-2 flex " : "hidden"
        }
      >
        <input
          type="text"
          placeholder="search something..."
          className="px-20 p-2 rounded-full bg-transparent  max-lg:px-2" // border optional
        />
        <Button name={"search"} roundedFull px={"px-4"} />
      </div>
      {/* close */}
    </div>
  );
};

export default Searchbar;
