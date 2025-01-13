import React from "react";
import { useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import SearchBox from "../components/SearchBox";

//TODO: NoSearchResult.tsx, MenuBar.tsx겹치는 로직 리팩토링
const NoSearchResult = () => {
  const location = useLocation();

  // URLSearchParams를 통해 keyword 파라미터 추출
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  return (
    <div className="absolute top-0 left-0 z-50 w-full h-screen bg-white">
      <div className="flex flex-col items-center mt-[99px] lg:mt-[141px] mb-[150px] lg:mb-[92px]">
        <SearchBox className="w-[253px] lg:w-[336px] h-[50px] lg:h-[71px] text-[16px] lg:text-[25px] lg:rounded-[30px]" />
      </div>
      <div className="flex flex-col items-center gap-[30px] lg:gap-[64px] text-[#6D6D6D]">
        <div className="text-[33px] lg:text-[69px]">
          <IoMdSearch />
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="text-[16px] lg:text-[20px] font-semibold leading-[35px]">
            '{keyword}'에 관한 검색결과가 없습니다.
          </p>
          <p className="text-center w-[260px] lg:w-full text-[14px] lg:text-[20px] font-medium leading-[20px] lg:leading-[35px] break-keep">
            모든 단어의 철자가 정확한지 확인하거나 다른 검색어로 검색해 보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoSearchResult;
