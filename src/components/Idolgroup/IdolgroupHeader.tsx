import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, Location } from "react-router-dom";

import { useIdolGroupPageIndexStore } from "../../store/store";
import { IidolGroup } from "../../types/idol";
import { groupList } from "../../data/idolgroup";
import HamburgerMenu from "../HamburgerMenu";

interface IIdolgroupHeader {
  group: IidolGroup;
  location: Location;
}

const IdolgroupHeader = ({ group, location }: IIdolgroupHeader) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const { activeIndex, setActiveIndex, setPrevIndex } =
    useIdolGroupPageIndexStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sectionLinks = [
    { id: "home", label: "HOME" },
    { id: "members", label: "MEMBERS" },
    { id: "albums", label: "ALBUMS" },
  ];

  // 스크롤 이동 처리
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const elementTop =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <header
      ref={headerRef}
      className="w-full top-0 left-0 xl:mt-[51px] text-[14px] lg:text-[30px] font-bold z-10"
      style={{ backgroundColor: group.bgColor }}
    >
      <div className="flex justify-between items-start lg:items-center pl-[50%] pr-[47px] lg:px-[120px] py-[28px] lg:py-[42px]">
        <img
          src={`/images/icon_ddol.svg`}
          alt="MY IDOL"
          className="w-[22px] lg:w-[54px]"
        />
        <HamburgerMenu className={`text-[${group.textColor}]`} />
      </div>
      <nav
        className="w-full flex justify-around lg:justify-start items-center pb-[24px] lg:pb-[76px] lg:px-[120px] lg:gap-[40px]"
        style={{ borderBottom: `2px solid ${group.textColor}` }}
      >
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
                color: isActive ? group.headerActiveTextColor : group.textColor,
                backgroundColor: isActive
                  ? group.headerActiveColor
                  : "transparent",
              })}
            >
              {navGroupName}
            </NavLink>
          );
        })}
      </nav>
      <nav className="w-full flex justify-center lg:justify-start items-center pt-[23px] lg:pt-[62px] pb-[40px] lg:px-[120px] gap-[18px] lg:gap-[40px]">
        {sectionLinks.map((section, idx) => (
          <Link key={idx} to={`#${section.id}`} className="cursor-pointer">
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default IdolgroupHeader;
