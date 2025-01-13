import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const theboyzKeyword = ["더보이즈", "theboyz", "the boyz"];
const zb1Keyword = ["제로베이스원", "제베원", "zb1", "zerobaseone"];
const riizeKeyword = ["라이즈", "riize"];
const nctwishKeyword = [
  "엔시티 위시",
  "엔시티위시",
  "엔위시",
  "위시",
  "nct wish",
  "nctwish",
];

const keywordMap: { [key: string]: string[] } = {
  "/idolgroup/THEBOYZ": theboyzKeyword,
  "/idolgroup/ZEROBASEONE": zb1Keyword,
  "/idolgroup/RIIZE": riizeKeyword,
  "/idolgroup/NCTWISH": nctwishKeyword,
};

const SearchBox = ({ className }: { className?: string }) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerSearchKeyword = searchKeyword.toLowerCase();

    const matchingRoute = Object.keys(keywordMap).find((route) =>
      keywordMap[route].includes(lowerSearchKeyword)
    );

    if (matchingRoute) {
      navigate(matchingRoute);
    } else {
      console.log("No matching group found");
    }
  };

  return (
    <form
      className={`relative flex items-center py-[5px] rounded-[20px] border-2 border-solid border-[#6D6D6D] shadow-md ${className}`}
      onSubmit={submitHandler}
    >
      <button className="mx-[15px] text-[#6D6D6D]" type="submit">
        <IoIosSearch />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full pl-[10px] py-[17px] bg-transparent  border-l-2 focus:outline-none"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
