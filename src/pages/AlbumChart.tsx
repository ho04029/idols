import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { IdolGroups } from "../data/idolgroup";
import { albumSales } from "../data/albumSales";
import Header from "../components/Header";

export interface IdataSet {
  label: string; //차트에 넣을 label. 앨범 이름을 넣고 있음
  data: number[];
  backgroundColor: string;
  borderColor: string;
}

const AlbumChart = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<IdataSet[]>([]);
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];
  const albumDataSet = albumSales[groupName];

  const selectAlbumHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const albumTitle = e.currentTarget.textContent as string;

    if (!albumTitle) return;

    const albumData = albumDataSet[albumTitle];
    const isSelected = isAlbumSelected(albumTitle);

    setSelectedAlbum((prev) =>
      isSelected
        ? removeAlbum(prev, albumTitle)
        : addAlbum(prev, albumTitle, albumData.albumSalesData)
    );
  };

  // 이미 선택된 앨범 인지 확인
  const isAlbumSelected = (albumTitle: string): boolean => {
    return selectedAlbum.some((data) => data.label === albumTitle);
  };

  // 앨범 추가 함수
  const addAlbum = (
    prev: typeof selectedAlbum,
    albumTitle: string,
    albumSalesData: (typeof albumDataSet)[string]["albumSalesData"]
  ) => [
    ...prev,
    {
      label: albumTitle,
      data: albumSalesData,
      backgroundColor: "transparent",
      borderColor: "#000000",
    },
  ];

  // 앨범 제거 함수
  const removeAlbum = (prev: typeof selectedAlbum, albumTitle: string) =>
    prev.filter((data) => data.label !== albumTitle);

  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: group.bgColor, color: group.textColor }}
    >
      <Header />
      <main>
        <section>
          {selectedAlbum.map((data, idx) => (
            <li
              key={idx}
              onClick={selectAlbumHandler}
              className="cursor-pointer"
            >
              {data.label}
            </li>
          ))}
        </section>
        <section>
          <ul>
            {Object.keys(albumDataSet).map((title, idx) => (
              <li
                key={idx}
                onClick={selectAlbumHandler}
                className="cursor-pointer"
              >
                {title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AlbumChart;
