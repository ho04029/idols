import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { IdolGroups } from "../data/idolgroup";
import RouteTransition from "./RouteTransition";
import Header from "../components/Header";

const Layout = () => {
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups.find((group) => group.name === groupName);

  const {
    textColor = "black",
    headerActiveColor = "gray",
    headerActiveTextColor = "white",
    bgColor = "black",
  } = group || {};

  return (
    <div className="flex justify-center">
      <div
        className="font-['Loboto'] w-[430px]"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="flex flex-col items-center">
          <Header
            textColor={textColor}
            headerActiveColor={headerActiveColor}
            headerActiveTextColor={headerActiveTextColor}
          />
          <RouteTransition location={location}>
            <Outlet />
          </RouteTransition>
        </div>
      </div>
    </div>
  );
};

export default Layout;
