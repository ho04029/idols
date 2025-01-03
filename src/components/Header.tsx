import { useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useIdolGroupPageIndexStore } from "../store/store";
import { IdolGroups, groupList } from "../data/idolgroup";
import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const pathName = location.pathname.split("/");
  const curPage = pathName[1];
  const groupName = pathName[2];
  const group = IdolGroups[groupName];

  const { activeIndex, setActiveIndex, setPrevIndex } =
    useIdolGroupPageIndexStore();

  const homeHandler = () => {
    navigate("/idolgroup/THEBOYZ");
  };

  return (
    <header
      ref={headerRef}
      className="w-full top-0 left-0 xl:mt-[51px] text-[14px] lg:text-[25px] xl:text-[30px] font-bold"
      style={{ backgroundColor: group.bgColor }}
    >
      <div
        onClick={homeHandler}
        className="flex justify-between items-start lg:items-center pl-[50%] pr-[30px] lg:px-[120px] py-[28px] lg:py-[42px]"
      >
        <img
          src={`/images/icon_ddol.svg`}
          alt="MY IDOL"
          className="w-[22px] lg:w-[54px] cursor-pointer"
        />
        <HamburgerMenu className={`text-[${group.textColor}]`} />
      </div>
      <nav className="w-full flex justify-around lg:justify-between pb-[24px] lg:pb-[76px] lg:px-[120px]">
        <ul className="w-full lg:w-[80%] flex justify-around lg:justify-start items-center lg:gap-[40px]">
          {groupList.map((navGroupName, idx) => {
            return (
              <NavLink
                key={idx}
                to={`/${curPage}/${navGroupName}`}
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
        <SearchBox className="w-0 h-0 lg:w-[15%] lg:max-w-[190px] lg:h-[50px] invisible lg:visible lg:bg-white lg:text-black lg:text-[16px] lg:border-none" />
      </nav>
    </header>
  );
};

export default Header;
