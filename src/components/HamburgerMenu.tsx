import React from "react";

import { useMenuStore } from "../store/menuOpen";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const MobileMenu = () => {
  const closeMenuHandler = useMenuStore((state) => state.closeMenuHandler);
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-screen bg-white">
      <AiOutlineClose onClick={closeMenuHandler} className="text-black" />
    </div>
  );
};

const HamburgerMenu = () => {
  const openMenuHandler = useMenuStore((state) => state.openMenuHandler);
  return <AiOutlineMenu onClick={openMenuHandler} />;
};

export default HamburgerMenu;
