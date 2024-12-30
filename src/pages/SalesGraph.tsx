import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

import { IdolGroups } from "../data/idolgroup";
import { albumSales } from "../data/albumSales";
import Header from "../components/Header";

export interface IdataSet {
  label: string; //차트에 넣을 label. 앨범 이름을 넣고 있음
  data: number[];
  backgroundColor: string;
  borderColor: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const labels = ["1일차", "2일차", "3일차", "4일차", "5일차", "6일차", "7일차"];

const SalesGraph = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<IdataSet[]>([]);
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];
  const albumDataSet = albumSales[groupName];

  const options = {
    interaction: {
      intersect: false,
    },
    defaults: {
      borderColor: "#ffffff",
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: group.textColor,
          borderWidth: 1,
        },
        ticks: {
          color: group.textColor, //폰트컬러
        },
      },
      y: {
        grid: {
          color: group.textColor,
        },
        ticks: {
          maxTicksLimit: 4, // Y축 라벨을 최대 6개로 제한
          color: group.textColor, //폰트컬러
        },
      },
    },
  };

  const data = {
    labels,
    datasets:
      selectedAlbum.length > 0
        ? selectedAlbum
        : [
            {
              label: "",
              data: [],
              backgroundColor: "transparent",
              borderColor: "transparent",
            },
          ],
  };

  const selectAlbumHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const albumTitle = e.currentTarget.textContent as string;

    if (!albumTitle) return;

    const albumData = albumDataSet[albumTitle];
    const isSelected = isAlbumSelected(albumTitle);

    setSelectedAlbum((prev) =>
      isSelected
        ? removeAlbum(prev, albumTitle)
        : addAlbum(prev, albumTitle, albumData)
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
    albumData: (typeof albumDataSet)[string]
  ) => [
    ...prev,
    {
      label: albumTitle,
      data: albumData.albumSalesData,
      backgroundColor: albumData.mainColor,
      borderColor: albumData.mainColor,
    },
  ];

  // 앨범 제거 함수
  const removeAlbum = (prev: typeof selectedAlbum, albumTitle: string) =>
    prev.filter((data) => data.label !== albumTitle);

  //선택된 그룹이 바뀌면 selectedAlbum초기화
  useEffect(() => {
    setSelectedAlbum([]);
  }, [groupName]);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: group.bgColor, color: group.textColor }}
    >
      <Header />
      <main className="w-full">
        <section>
          <ul className="flex flex-wrap gap-[15px]">
            {selectedAlbum.map((data, idx) => (
              <li
                key={idx}
                onClick={selectAlbumHandler}
                style={{ color: data.borderColor }}
                className="flex items-center gap-[5px] cursor-pointer"
              >
                <div
                  style={{ backgroundColor: data.borderColor }}
                  className="w-[10px] h-[10px] rounded-full"
                ></div>
                <p className="font-bold text-[14px]">{data.label}</p>
              </li>
            ))}
          </ul>
          <Line options={options} data={data} />
        </section>
        <section>
          <ul className="grid grid-cols-3 lg:grid-cols-4 gap-x-[42px] lg:gap-x-[135px] gap-y-[30px] lg:gap-y-[43px]">
            {Object.keys(albumDataSet).map((title, idx) => (
              <li
                key={idx}
                onClick={selectAlbumHandler}
                className="flex flex-col items-center gap-[15px] cursor-pointer"
              >
                <img src={albumDataSet[title].img} alt={title} />
                <p className="text-center font-bold text-[16px] lg:text-[20px] leading-[10px]">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default SalesGraph;
