import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useIdolGroupPageIndexStore } from "../store/store";
import { IdolGroups, groupList } from "../data/idolgroup";
import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];

  const { activeIndex, setActiveIndex, setPrevIndex } =
    useIdolGroupPageIndexStore();

  return (
    <header
      ref={headerRef}
      className="w-full top-0 left-0 xl:mt-[51px] text-[14px] lg:text-[30px] font-bold"
      style={{ backgroundColor: group.bgColor }}
    >
      <div className="flex justify-between items-start lg:items-center pl-[50%] pr-[30px] lg:px-[120px] py-[28px] lg:py-[42px]">
        <img
          src={`/images/icon_ddol.svg`}
          alt="MY IDOL"
          className="w-[22px] lg:w-[54px]"
        />
        <HamburgerMenu className={`text-[${group.textColor}]`} />
      </div>
      <nav
        className="w-full flex justify-around xl:gap-[10%] pb-[24px] lg:pb-[76px] lg:px-[120px]"
        style={{ borderBottom: `2px solid ${group.textColor}` }}
      >
        <ul className="w-full flex justify-around lg:justify-start items-center lg:gap-[40px]">
          {groupList.map((navGroupName, idx) => {
            return (
              <NavLink
                key={idx}
                to={`/idolgroup/${navGroupName}`}
                onClick={() => {
                  setPrevIndex(activeIndex);
                  setActiveIndex(idx);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "p-[3px] lg:py-[8px] lg:px-[15px] rounded lg:rounded-3xl"
                    : ""
                }
                style={({ isActive }) => ({
                  color: isActive
                    ? group.headerActiveTextColor
                    : group.textColor,
                  backgroundColor: isActive
                    ? group.headerActiveColor
                    : "transparent",
                })}
              >
                {navGroupName}
              </NavLink>
            );
          })}
        </ul>
        <SearchBox className="w-0 xl:w-full invisible xl:visible xl:rounded-3xl xl:bg-white xl:text-black xl:border-none" />
      </nav>
    </header>
  );
};

export default Header;
