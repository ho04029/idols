import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const screenWidth = window.innerWidth;
  const random = Math.floor(Math.random() * home_imgs.length);

  useEffect(() => {
    //640px이상의 화면은 바로 더보이즈 페이지로
    if (screenWidth >= 640) {
      navigate("/idolgroup/THEBOYZ");
    }

    //이미지 프리로드드
    const img = new Image();
    img.src = home_imgs[random].img;
    img.onload = () => setImageLoaded(true);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, [navigate, screenWidth, random]);

  //로딩중이거나 이미지 로드 전에 띄울 화면
  if (loading || !imageLoaded) {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
        <img
          src={`/images/icon_ddol.svg`}
          alt="MY IDOL"
          className="w-[88px] mb-[20px]"
        />
        <p className="text-[25px] font-bold text-[#151147] animate-blinking">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link to={`/idolgroup/${home_imgs[random].path}`}>
        <img src={home_imgs[random].img} alt="home" className="max-h-screen" />
      </Link>
    </div>
  );
};

export default Home;
