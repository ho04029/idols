import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { useMenuStore } from "../store/menuOpen";
import { IdolGroups, groupList } from "../data/idolgroup";
import { transitionDirectionCalculator } from "../utils/transitionDirectionCalculator";
import RouteTransition from "../components/RouteTransition";
import IdolgroupMember from "../components/Idolgroup/IdolgroupMember";
import IdolgroupComponent from "../components/Idolgroup/IdolgroupComponent";
import HamburgerMenu, { MobileMenu } from "../components/HamburgerMenu";

const Idolgroup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const location = useLocation();
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];
  const direction = transitionDirectionCalculator(activeIndex, prevIndex);

  // 처음 페이지 접속시 activeIndex값을 저장
  useEffect(() => {
    const currentIndex = groupList.findIndex((group) => group === groupName);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, []);

  return (
    <IdolgroupComponent group={group}>
      {isMenuOpen && <MobileMenu />}
      <header
        className="sticky w-full top-0 left-0 mt-[37px] mb-[38px] text-[14px] font-bold z-10"
        style={{ backgroundColor: group.bgColor }}
      >
        <div>
          <HamburgerMenu />
        </div>
        <nav className="w-full flex justify-between gap-[18px]">
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
                  color: isActive
                    ? group.headerActiveTextColor
                    : group.textColor,
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
      </header>
      <RouteTransition location={location} direction={direction}>
        <main>
          <IdolgroupComponent.Section>
            <img
              src={group.logo}
              alt={`${group.name} logo`}
              className="h-[47px] mb-[18px]"
            />
            <img
              src={group.mainPhoto}
              alt={`${group.name} mainPhoto`}
              className="w-[359px] h-[237px] mb-2"
            />
            <p className="text-center text-[14px] font-bold break-keep">
              {group.slogan}
            </p>
          </IdolgroupComponent.Section>

          <IdolgroupComponent.Section>
            <IdolgroupComponent.H3>MEMBERS</IdolgroupComponent.H3>
            <IdolgroupComponent.Ul length={group.members.length}>
              {group.members.map((member, idx) => (
                <IdolgroupMember
                  key={idx}
                  member={member}
                  memberConColor={group.memberConColor}
                  memberConTextColor={group.memberConTextColor}
                />
              ))}
            </IdolgroupComponent.Ul>
          </IdolgroupComponent.Section>
          <IdolgroupComponent.Albums
            albums={group.albums}
            albumConBgColor={group.albumconbgColor}
            albumContextColor={group.albumcontextColor}
          />
          {group.japanAlbums && (
            <IdolgroupComponent.Albums
              albums={group.japanAlbums}
              albumConBgColor={group.albumconbgColor}
              albumContextColor={group.albumcontextColor}
              sectionTitle="JAPAN ALBUMS"
            />
          )}
        </main>
      </RouteTransition>
    </IdolgroupComponent>
  );
};

export default Idolgroup;
