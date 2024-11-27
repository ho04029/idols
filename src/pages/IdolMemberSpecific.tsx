import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";
import { memberSpecifics } from "../data/memberSpecific";
import Slider from "../components/Slider";

export const SpecificList = ({
  title,
  des,
}: {
  title: string;
  des: string | string[];
}) => {
  return (
    <li className="flex items-start mb-[20px]">
      <span className="text-base font-bold mr-[15px] break-keep">{title}</span>
      <p>
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
    symbolNumber,
  } = members[memberName];

  const formattedBirth = birth[0]
    .split("년 ")
    .join("-")
    .split("월 ")
    .join("-")
    .split("일")
    .join("");

  const age = ageCalculator(formattedBirth);
  const updatedBirth = [`${birth[0]} (${age}세)`, birth[1]];

  return (
    <div
      className="w-[430px] max-w-full overflow-hidden"
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      <header>
        <div>
          <div className="flex items-center justify-center pt-[33px] pb-[22px]">
            <img src={logo} alt={`${groupName}_logo`} />
          </div>
        </div>
      </header>
      <section>
        <div className="mt-[34px] mb-[10px]">
          <Slider slides={imgs} />
        </div>
        <div className="flex items-center justify-center text-center flex-col text-xl font-bold mb-[31.35px]">
          {memberName}
          <span className="text-[16px]">{englishName}</span>
        </div>
        <div className="mx-[21px]">
          <ul className="text-sm font-medium">
            <SpecificList title="본명" des={name} />
            <SpecificList title="출생" des={updatedBirth} />
            <SpecificList title="국적" des={nationality} />
            <SpecificList title="신체" des={physical} />
            <SpecificList title="가족" des={familys} />
            {academics && <SpecificList title="학력" des={academics} />}
            {religion && <SpecificList title="종교" des={religion} />}
            <SpecificList title="소속사" des={agency} />
            <SpecificList title="소속 그룹" des={groupName} />
            <SpecificList title="포지션" des={position} />
            <SpecificList title="데뷔" des={debut} />
            {serialNumber && (
              <SpecificList title="고유번호" des={serialNumber} />
            )}
            <SpecificList title="MBTI" des={mbti} />
            {symbolNumber && (
              <SpecificList title="상징번호" des={symbolNumber} />
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IdolMemberSpecific;
