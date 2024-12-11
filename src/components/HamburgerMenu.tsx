import React from "react";

import { useMenuStore } from "../store/store";

const HamburgerMenu = ({ className }: { className?: string }) => {
  const openMenuHandler = useMenuStore((state) => state.openMenuHandler);
  return (
    <img
      src={`/images/icon_hamburger.svg`}
      alt="menu"
      onClick={openMenuHandler}
      className={`cursor-pointer w-[20px] lg:w-[29px] ${className}`}
    />
  );
};

export default HamburgerMenu;
