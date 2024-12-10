import { Outlet } from "react-router-dom";

import { useMenuStore } from "../store/store";
import MenuBar from "./MenuBar";

const Layout = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  return (
    <div className="flex justify-center font-['Loboto']">
      {isMenuOpen && <MenuBar />}
      <Outlet />
    </div>
  );
};

export default Layout;
