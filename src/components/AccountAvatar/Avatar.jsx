import { BsPostcard, FiSave } from '../../utils/icons';
import { Button, ItemCard } from '../../utils/index';

const Avatar = () => {
  return (
    <div
      className="grid grid-cols-3 gap-4  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1 "
    >
      {/* user image */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s"
          alt="user image was not found!"
          className="w-full rounded-2xl"
        />
      </div>
      {/* details */}
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-5xl font-semibold capitalize">jhon doe</h2>
        <h3 className="mt-5 text-2xl">jhon2131@gmail.com</h3>
        {/* edit button */}
        <div className="flex mt-20  text-center w-[50%] max-lg:mt-5 max-lg:w-full">
          <Button name={"edit profile"} roundedFull />
        </div>
      </div>
      {/* scores */}
      <div className="flex gap-3 h-fit max-lg:flex-col
       max-lg:mt-10 text-center">
      <ItemCard name={'12post writed'} fontWeight={'font-semibold'} fontSize={'text-3xl'} roundedMedium icon={<BsPostcard size={60}/>}/>
      <ItemCard name={'20saved news'} fontWeight={'font-semibold'} fontSize={'text-3xl'} roundedMedium icon={<FiSave size={60}/>}/> 
 
      </div>
    </div>
  );
};

export default Avatar;
