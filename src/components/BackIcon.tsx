import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackIcon = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <IoIosArrowBack
      onClick={backHandler}
      className={`text-[20px] lg:text-[29px] cursor-pointer ${className}`}
    />
  );
};

export default BackIcon;
