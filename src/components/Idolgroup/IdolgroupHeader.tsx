import React, { useEffect } from "react";
import { Link, Location } from "react-router-dom";

import { IidolGroup } from "../../types/idol";
import Header from "../Header";

interface IIdolgroupHeader {
  group: IidolGroup;
  location: Location;
  groupName: string;
}

const IdolgroupHeader = ({ group, location, groupName }: IIdolgroupHeader) => {
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
    <>
      <Header />
      <nav
        style={{ borderTop: `2px solid ${group.textColor}` }}
        className="w-full flex justify-center lg:justify-start items-center pt-[23px] lg:pt-[62px] pb-[40px] lg:px-[120px] gap-[18px] lg:gap-[40px] text-[14px] lg:text-[30px] font-bold"
      >
        {sectionLinks.map((section, idx) => (
          <Link key={idx} to={`#${section.id}`} className="cursor-pointer">
            {section.label}
          </Link>
        ))}
        <Link to={`/graph/${groupName}`} className="cursor-pointer">
          SALES GRAPH
        </Link>
      </nav>
    </>
  );
};

export default IdolgroupHeader;
