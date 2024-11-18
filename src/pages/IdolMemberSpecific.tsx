import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { memberSpecifics } from "../data/memberSpecific";

const IdolMemberSpecific = () => {
  const location = useLocation();

  const groupNamePath = location.pathname.split("/")[2];
  const { memberName } = useParams() as { memberName: string };

  const { bgColor, txtColor, logo, members } = memberSpecifics[groupNamePath];
  const {
    name,
    englishName,
    imgs,
    birth,
    nationality,
    physical,
    familys,
    academics,
    religion,
    agency,
    groupName,
    position,
    debut,
    mbti,
    serialNumber,
  } = members[memberName];

  console.log(members[`${memberName}`]);

  return (
    <section>
      <div className="slide_wrap">
        <div className="container">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
              <div className="swiper-slide">Slide 4</div>
              <div className="swiper-slide">Slide 5</div>
              <div className="swiper-slide">Slide 6</div>
              <div className="swiper-slide">Slide 7</div>
              <div className="swiper-slide">Slide 8</div>
              <div className="swiper-slide">Slide 9</div>
            </div>
          </div>
        </div>
      </div>
      <div className="info_wrap">
        <div className="container">
          <div className="name">
            {memberName}
            <span className="eng">{englishName}</span>
          </div>
          <div className="info_list">
            <ul>
              <li>
                <span>본명</span>
                {name}
              </li>
              <li className="enter">
                <span>출생</span>
                {birth}
              </li>
              <li>
                <span>국적</span>
                {nationality}
              </li>
              <li>
                <span>신체</span>
                {physical}
              </li>
              <li>
                <span>가족</span>
                {familys.map((family) => (
                  <p>{family}</p>
                ))}
              </li>
              <li className="enter">
                <span>학력</span>
                {academics.map((academic) => (
                  <p>{academic}</p>
                ))}
              </li>
              <li>
                <span>종교</span>
                {religion}
              </li>
              <li>
                <span>소속사</span>
                {agency}
              </li>
              <li>
                <span>소속 그룹</span>
                {groupName}
              </li>
              <li>
                <span>포지션</span>
                {position}
              </li>
              <li>
                <span>데뷔</span>
                {debut}
              </li>
              {serialNumber && (
                <li>
                  <span>고유번호</span>
                  {serialNumber}
                </li>
              )}
              <li>
                <span>MBTI</span>
                {mbti}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdolMemberSpecific;
