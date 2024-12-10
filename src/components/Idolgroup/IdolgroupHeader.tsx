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
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const headerRef = useRef<HTMLDivElement>(null);

  const { activeIndex, setActiveIndex, setPrevIndex } =
    useIdolGroupPageIndexStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sectionLinks = [
    { id: "home", label: "HOME" },
    { id: "members", label: "MEMBERS" },
    { id: "albums", label: "ALBUMS" },
  ];

  // 현재 스크롤 위치에 따라 활성화된 섹션 설정
  useEffect(() => {
    const handleScroll = () => {
      sectionLinks.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션이 화면 중앙 근처에 있으면 활성화
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionLinks]);

  //헤더 높이 측정
  useEffect(() => {
    const headerElement = headerRef.current;

    if (headerElement) {
      // 초기 높이 설정
      setHeaderHeight(headerElement.offsetHeight);

      // ResizeObserver로 높이 감지
      const observer = new ResizeObserver(() => {
        setHeaderHeight(headerElement.offsetHeight);
      });

      observer.observe(headerElement);

      // 컴포넌트 언마운트 시 observer 해제
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // 스크롤 이동 처리
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const elementTop =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: "smooth",
        });
      }
    }
  }, [location, headerHeight]);

  return (
    <header
      ref={headerRef}
      className="sticky w-full top-0 left-0 xl:mt-[51px] text-[14px] xl:text-[40px] font-bold z-10"
      style={{ backgroundColor: group.bgColor }}
    >
      <div className="flex justify-between pl-[50%] pr-[47px] py-[28px]">
        <img src={`/images/icon_ddol.svg`} alt="MY IDOL" className="w-[22px]" />
        <HamburgerMenu className={`text-[${group.textColor}]`} />
      </div>
      <nav className="w-full flex justify-center lg:justify-start items-center pb-[24px] xl:pl-[186px] gap-[18px] xl:gap-[60px] border-b-2">
        {groupList.map((navGroupName, idx) => {
          return (
            <NavLink
              key={idx}
              to={`/idolgroup/${navGroupName}`}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(idx);
              }}
              style={({ isActive }) => ({
                color: isActive ? group.headerActiveTextColor : group.textColor,
                backgroundColor: isActive
                  ? group.headerActiveColor
                  : "transparent",
                borderRadius: isActive ? "5px" : "none",
                padding: isActive ? "4px 5px 5px" : "none",
              })}
            >
              {navGroupName}
            </NavLink>
          );
        })}
      </nav>
      <nav className="w-full flex justify-center lg:justify-start items-center pt-[23px] pb-[40px] xl:pl-[186px] gap-[18px] xl:gap-[60px]">
        {sectionLinks.map((section, idx) => (
          <Link
            key={idx}
            to={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}
            style={{
              color:
                activeSection === section.id
                  ? group.headerActiveTextColor
                  : group.textColor,
              backgroundColor:
                activeSection === section.id
                  ? group.headerActiveColor
                  : "transparent",
              borderRadius: activeSection === section.id ? "5px" : "none",
              padding: activeSection === section.id ? "4px 5px 5px" : "none",
            }}
            className="cursor-pointer"
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default IdolgroupHeader;
