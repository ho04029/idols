import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative flex items-center py-[5px] rounded-[20px] border-2 border-solid border-[#6D6D6D] shadow-md ${className}`}
    >
      <button className="mx-[15px] text-[#6D6D6D]">
        <IoIosSearch />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full pl-[10px] py-[17px] bg-transparent  border-l-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
