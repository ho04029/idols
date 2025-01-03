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
          className="w-full mb-[10px] lg:mb-[30px]"
        />
        <p className="mb-[8px] lg:mb-[15px] text-[16px] lg:text-[30px] font-bold">
          {name}
        </p>
        <p className="mb-[8px] lg:mb-[15px] text-[14px] lg:text-[25px] font-medium">{`${birth} (${age}세)`}</p>
        <div
          className="text-[12px] lg:text-[25px] font-medium px-[4px] lg:px-[18px] py-[2px] lg:py-[7px] rounded-[5px] lg:rounded-[28px] break-keep text-center"
          style={{ backgroundColor: memberConColor, color: memberConTextColor }}
        >
          <p>{role}</p>
        </div>
      </Link>
    </li>
  );
};

export default IdolgroupMember;
