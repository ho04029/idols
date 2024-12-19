import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";
import { memberSpecifics } from "../data/memberSpecific";
import Slider from "../components/Slider";
import HamburgerMenu from "../components/HamburgerMenu";
import BackIcon from "../components/BackIcon";

export const SpecificList = ({
  title,
  des,
}: {
  title: string;
  des: string | string[];
}) => {
  return (
    <li className={`flex items-start mb-[20px] lg:mb-[30px]`}>
      <span className="font-bold text-[16px] lg:text-[30px] mr-[15px] break-keep">
        {title}
      </span>
      <p className="text-[14px] lg:text-[25px]">
        {Array.isArray(des)
          ? des.map((item, index) => (
              <span key={index} className="block break-keep">
                {item}
              </span>
            ))
          : des}
      </p>
    </li>
  );
};

const IdolMemberSpecific = () => {
  const location = useLocation();

  const groupNamePath = location.pathname.split("/")[2];
  const { memberName } = useParams() as { memberName: string };

  const { bgColor, txtColor, logo, members } = memberSpecifics[groupNamePath];
  const member = members[memberName];

  const formattedBirth = member.birth[0]
    .split("년 ")
    .join("-")
    .split("월 ")
    .join("-")
    .split("일")
    .join("");

  const age = ageCalculator(formattedBirth);
  const updatedBirth = [`${member.birth[0]} (${age}세)`, member.birth[1]];

  const specificFields = [
    { title: "본명", des: member.name },
    { title: "출생", des: updatedBirth },
    { title: "국적", des: member.nationality },
    { title: "신체", des: member.physical },
    { title: "가족", des: member.familys },
    { title: "학력", des: member.academics },
    { title: "종교", des: member.religion },
    { title: "소속사", des: member.agency },
    { title: "소속 그룹", des: member.groupName },
    { title: "포지션", des: member.position },
    { title: "데뷔", des: member.debut },
    { title: "고유번호", des: member.serialNumber },
    { title: "MBTI", des: member.mbti },
    { title: "상징번호", des: member.symbolNumber },
  ];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      <header className="flex items-center justify-around pt-[33px] lg:pt-[40px] pb-[22px] lg:pb-[43px]">
        <BackIcon />
        <img src={logo} alt={`${member.groupName}_logo`} className="h-[53px]" />
        <HamburgerMenu />
      </header>
      <section className="lg:flex lg:justify-center lg:items-center lg:gap-[50px]">
        <div className="mt-[34px]">
          <Slider slides={member.imgs} />
          <div className="flex items-center justify-center text-center flex-col text-xl lg:text-[40px] font-bold mt-[10px] lg:mt-[40px] mb-[31.35px]">
            <p className="mb-[5px] lg:mb-[10px ]">{memberName}</p>
            <p className="text-[16px] lg:text-[35px]">{member.englishName}</p>
          </div>
        </div>

        <ul className="mx-[21px]">
          {specificFields
            .filter((field) => field.des)
            .map((field, index) => (
              <SpecificList key={index} title={field.title} des={field.des!} />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default IdolMemberSpecific;
