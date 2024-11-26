import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center font-['Loboto']">
      <Outlet />
    </div>
  );
};

export default Layout;
