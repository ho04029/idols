import React from "react";

import { useMenuStore } from "../store/store";
import { AiOutlineMenu } from "react-icons/ai";

const HamburgerMenu = ({ className }: { className?: string }) => {
  const openMenuHandler = useMenuStore((state) => state.openMenuHandler);
  return (
    <AiOutlineMenu
      onClick={openMenuHandler}
      className={`text-[20px] ${className}`}
    />
  );
};

export default HamburgerMenu;
