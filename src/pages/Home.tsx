import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const home_imgs = [
  {
    path: "THEBOYZ",
    img: "https://i.ibb.co/j5xFgmH/home-theboyz1.png",
    title_img: "https://i.ibb.co/Tm839Qh/home-title-theboyz.png",
    click_bg: "#000000",
    click_text: "#ffffff",
  },
  {
    path: "ZEROBASEONE",
    img: "https://i.ibb.co/XSrfsHY/home-zb11.png",
    title_img: "https://i.ibb.co/7K5CNBQ/home-title-zb1.png",
    click_bg: "#F95052",
    click_text: "#FFFFFF",
  },
  {
    path: "RIIZE",
    img: "https://i.ibb.co/R3R2S42/home-riize1.png",
    title_img: "https://i.ibb.co/3dr6Lw3/home-title-riize.png",
    click_bg: "#FAB360",
    click_text: "#000000",
  },
  {
    path: "NCTWISH",
    img: "https://i.ibb.co/Z6vrVyC/home-nctwish1.png",
    title_img: "https://i.ibb.co/TvtKb6S/home-title-nctwish.png",
    click_bg: "#B5E1FD",
    click_text: "#000000",
  },
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

  // 로딩중이거나 이미지 로드 전에 띄울 화면
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
    <div className="w-screen h-screen relative">
      <Link to={`/idolgroup/${home_imgs[random].path}`}>
        <img
          src={home_imgs[random].img}
          alt="home"
          className="w-full h-full object-cover object-center overflow-hidden"
        />
        <div className="absolute w-full z-10 top-[90px] px-[35px]">
          <img src={home_imgs[random].title_img} alt="my idol" />
        </div>
        <div
          className={`absolute bottom-[59px] right-1/2 translate-x-1/2 px-[13px] py-[7px] text-[15px] font-bold rounded-[18px]`}
          style={{
            backgroundColor: home_imgs[random].click_bg,
            color: home_imgs[random].click_text,
          }}
        >
          <p>Click Anywhere</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
