import React from "react";
import { Link } from "react-router-dom";

const home_imgs = [
  {
    path: "THEBOYZ",
    img: "https://i.ibb.co/my04thB/home-theboyz.png",
  },
  { path: "ZEROBASEONE", img: "https://i.ibb.co/Njk647y/home-zb1.png" },
  { path: "RIIZE", img: "https://i.ibb.co/6v1FfVv/home-riize.png" },
  { path: "NCTWISH", img: "https://i.ibb.co/2g9z9v8/home-nctwish.png" },
];

const Home = () => {
  const random = Math.floor(Math.random() * home_imgs.length);

  return (
    <div className="w-[430px] font-extrabold text-[33px]">
      <Link to={`/idolgroup/${home_imgs[random].path}`}>
        <img src={home_imgs[random].img} alt="home" className="max-h-screen" />
      </Link>
    </div>
  );
};

export default Home;
