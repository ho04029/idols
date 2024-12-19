import { useMenuStore } from "../store/store";
import { IoMenuOutline } from "react-icons/io5";

const HamburgerMenu = ({ className }: { className?: string }) => {
  const openMenuHandler = useMenuStore((state) => state.openMenuHandler);
  return (
    <IoMenuOutline
      onClick={openMenuHandler}
      className={`cursor-pointer text-[20px] lg:text-[35px] ${className}`}
    />
  );
};

export default HamburgerMenu;
