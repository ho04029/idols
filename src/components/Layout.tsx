import { Outlet } from "react-router-dom";

import { useMenuStore } from "../store/store";
import MenuBar from "./MenuBar";

const Layout = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  return (
    <>
      {isMenuOpen && <MenuBar />}
      <div
        className={`w-full flex justify-center font-['Loboto'] transition-all duration-300 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-auto"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
