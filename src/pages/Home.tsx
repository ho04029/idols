import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-col">
      <p>home</p>
      <Link to={"/idolgroup/THEBOYZ"}>아이돌그룹보기</Link>
    </div>
  );
};

export default Home;
