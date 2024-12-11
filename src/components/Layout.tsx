import { Outlet } from "react-router-dom";

import { useMenuStore } from "../store/store";
import MenuBar from "./MenuBar";

const Layout = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  return (
    <div className="flex justify-center font-['Loboto']">
      {isMenuOpen && <MenuBar />}
      <div
        className={`w-full transition-all duration-300 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-auto"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
