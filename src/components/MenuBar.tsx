import { useMenuStore } from "../store/store";
import { AiOutlineClose } from "react-icons/ai";

const MenuBar = () => {
  const closeMenuHandler = useMenuStore((state) => state.closeMenuHandler);
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-screen bg-white">
      <AiOutlineClose onClick={closeMenuHandler} className="text-black" />
    </div>
  );
};

export default MenuBar;
