import { Avatar, Heading, SavedNews } from "../utils/index";
const Account = () => {
  return (
    <div className="">
      <Heading
        title={"  settings"}
        fontSize={"text-[3rem]"}
        fontWeight={"font-bold"}
        fixed
      />
      <Avatar />
      <Heading title={"saved news"} fontSize={"text-[3rem]"}
        fontWeight={"font-bold"} fixed/>
      <SavedNews /> 
    </div>
  );
};

export default Account;
