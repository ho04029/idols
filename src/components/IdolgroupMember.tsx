import { Link } from "react-router-dom";

import { IidolMember } from "../types/idol";

const IdolgroupMember = ({
  groupName,
  member,
  memberConColor,
  memberConTextColor,
}: {
  groupName: string;
  member: IidolMember;
  memberConColor: string;
  memberConTextColor: string;
}) => {
  const { name, birth, role, img } = member;
  return (
    <Link to={`/idolgroup/${groupName}/${name}`}>
      <li className="flex flex-col items-center mb-[22px]">
        <img
          src={img}
          alt={`${name}`}
          className="w-[108px] h-[108px] mb-[6px]"
        />
        <p className="text-[14px] font-bold">{name}</p>
        <p className="text-[12px] font-medium mb-[3px]">{birth}</p>
        <div
          className="text-[8px] font-medium px-[7px] py-[1px] rounded-[5px]"
          style={{ backgroundColor: memberConColor, color: memberConTextColor }}
        >
          <p>{role}</p>
        </div>
      </li>
    </Link>
  );
};

export default IdolgroupMember;
