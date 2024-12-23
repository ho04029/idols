import React from "react";
import { useLocation } from "react-router-dom";

import { IdolGroups } from "../data/idolgroup";
import Header from "../components/Header";

const AlbumChart = () => {
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: group.bgColor, color: group.textColor }}
    >
      <Header />
    </div>
  );
};

export default AlbumChart;
