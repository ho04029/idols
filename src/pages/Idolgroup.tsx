import React from "react";

import { IidolGroup } from "../types/idol";
import Header from "../components/Header";
import IdolgroupMember from "../components/IdolgroupMember";

const Idolgroup = ({ group }: { group: IidolGroup }) => {
  const {
    name,
    logo,
    mainPhoto,
    slogan,
    members,
    bgColor,
    pointColor,
    textColor,
  } = group;
  return (
    <div className="flex justify-center">
      <div
        className="font-['Loboto'] max-w-[375px]"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Header />

        <div className="flex flex-col items-center">
          <section className="flex flex-col items-center mb-[54px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-[47px] mb-[18px]"
            />
            <img
              src={mainPhoto}
              alt={`${name} mainphoto`}
              className="w-[349px] h-[231px] mb-2"
            />
            <p className="text-[10px] font-semibold">{slogan}</p>
          </section>
          <section className="w-full flex flex-col items-center">
            <h3 className="text-4xl font-extrabold mb-[24px]">Members</h3>
            <ul className="w-full grid grid-cols-2">
              {members.map((member, idx) => (
                <IdolgroupMember
                  key={idx}
                  member={member}
                  pointColor={pointColor}
                />
              ))}
            </ul>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
};

export default Idolgroup;
