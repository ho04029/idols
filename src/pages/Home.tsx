import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="w-[430px] font-extrabold text-[33px]"
      style={{ backgroundColor: "#E6E9F1", color: "#192865" }}
    >
      <p className="mt-[29px] ml-[16px] mb-[52px]">#MYIDOL</p>
      <div className="flex justify-center">
        <Link to={"/idolgroup/THEBOYZ"}>
          <img src="/home.png" alt="home" className="w-[277px] h-[609px]" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
