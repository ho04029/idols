import React from "react";

import { IidolMember } from "../types/idol";

const IdolgroupMember = ({
  member,
  pointColor,
}: {
  member: IidolMember;
  pointColor: string;
}) => {
  const { name, birth, role, img } = member;
  return (
    <li className="flex flex-col items-center mb-[10px]">
      <img src={img} alt={`${name}`} className="w-[108px] h-[108px] mb-[6px]" />
      <p className="text-[14px] font-bold">{name}</p>
      <p className="text-[12px] font-medium mb-[3px]">{birth}</p>
      <div
        className="text-[8px] font-medium px-[7px] py-[1px] rounded-[5px]"
        style={{ backgroundColor: pointColor }}
      >
        <p>{role}</p>
      </div>
    </li>
  );
};

export default IdolgroupMember;
