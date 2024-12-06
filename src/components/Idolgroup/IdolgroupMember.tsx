import { Link } from "react-router-dom";

import { IidolMember } from "../../types/idol";
import { ageCalculator } from "../../utils/ageCalculator";

const IdolgroupMember = ({
  member,
  memberConColor,
  memberConTextColor,
}: {
  member: IidolMember;
  memberConColor: string;
  memberConTextColor: string;
}) => {
  const { name, birth, role, img } = member;
  const age = ageCalculator(birth);

  return (
    <li>
      <Link to={`${name}`} className="flex flex-col items-center mb-[22px]">
        <img
          src={img}
          alt={`${name}`}
          className="w-[108px] h-[108px] mb-[6px]"
        />
        <p className="text-[14px] font-bold">{name}</p>
        <p className="text-[12px] font-medium mb-[3px]">{`${birth} (${age}세)`}</p>
        <div
          className="text-[8px] font-medium px-[7px] py-[1px] rounded-[5px]"
          style={{ backgroundColor: memberConColor, color: memberConTextColor }}
        >
          <p>{role}</p>
        </div>
      </Link>
    </li>
  );
};

export default IdolgroupMember;
