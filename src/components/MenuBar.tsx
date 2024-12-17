import { useMenuStore } from "../store/store";
import { AiOutlineClose } from "react-icons/ai";
import SearchBox from "./SearchBox";

const MenuBar = () => {
  const closeMenuHandler = useMenuStore((state) => state.closeMenuHandler);
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-screen bg-white">
      <AiOutlineClose
        onClick={closeMenuHandler}
        className="text-[25px] lg:text-[35px] mt-[41px] lg:mt-[50px] mb-[29px] lg:mb-[45px] ml-[23px] lg:ml-[46px] text-black cursor-pointer"
      />
      <div className="flex flex-col items-center">
        <SearchBox className="w-[253px] lg:w-[445px] h-[50px] lg:h-[88px] text-[16px] lg:text-[25px] lg:rounded-[30px]" />
      </div>
    </div>
  );
};

export default MenuBar;
