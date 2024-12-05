import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { IdolGroups } from "../data/idolgroup";
import { transitionDirectionCalculator } from "../utils/transitionDirectionCalculator";
import RouteTransition from "../components/RouteTransition";
import IdolgroupMember from "../components/IdolgroupMember";
import IdolgroupAlbum from "../components/IdolgroupAlbum";

const Idolgroup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];
  const groupList = Object.keys(IdolGroups);
  const direction = transitionDirectionCalculator(activeIndex, prevIndex);

  // 처음 페이지 접속시 activeIndex값을 저장
  useEffect(() => {
    const currentIndex = groupList.findIndex((group) => group === groupName);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, []);

  const {
    name,
    logo,
    mainPhoto,
    slogan,
    members,
    albums,
    japanAlbums,
    memberConColor,
    memberConTextColor,
    albumconbgColor,
    albumcontextColor,
    textColor,
    headerActiveColor,
    headerActiveTextColor,
    bgColor,
  } = group;

  return (
    <div
      className="w-[430px] flex flex-col items-center"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <header className="flex mt-[37px] mb-[38px] text-[14px] font-bold">
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
                  color: isActive ? headerActiveTextColor : textColor,
                  backgroundColor: isActive ? headerActiveColor : "transparent",
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
          <section className="flex flex-col items-center mb-[54px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-[47px] mb-[18px]"
            />
            <img
              src={mainPhoto}
              alt={`${name} mainPhoto`}
              className="w-[359px] h-[237px] mb-2"
            />
            <p className="text-center text-[14px] font-bold break-keep">
              {slogan}
            </p>
          </section>

          <section className="w-full flex flex-col items-center mb-[60px]">
            <h3 className="text-4xl font-extrabold mb-[24px]">MEMBERS</h3>
            <ul className="w-full max-w-fit grid grid-cols-2 gap-x-[57px]">
              {members.map((member, idx) => (
                <IdolgroupMember
                  key={idx}
                  groupName={name}
                  member={member}
                  memberConColor={memberConColor}
                  memberConTextColor={memberConTextColor}
                />
              ))}
            </ul>
          </section>
          <section className="w-full flex flex-col items-center mb-[60px] px-[27px]">
            <h3 className="text-4xl font-extrabold mb-[40px]">ALBUMS</h3>
            {Object.keys(albums).map((category, idx) => (
              <section
                key={idx}
                className="w-full flex flex-col items-center mb-[40px]"
              >
                <div
                  className="max-w-fit text-[16px] font-semibold mb-[40px] pt-[3px] pr-[5px] pb-[2px] pl-[4px] rounded-[5px]"
                  style={{
                    backgroundColor: albumconbgColor,
                    color: albumcontextColor,
                  }}
                >
                  <p>{category}</p>
                </div>
                <ul
                  className={`w-full ${
                    albums[category]?.length === 1
                      ? "grid grid-cols-1 justify-center"
                      : "grid grid-cols-2 gap-x-[24px] gap-y-[58px]"
                  }`}
                >
                  {albums[category]?.map((album, idx) => (
                    <IdolgroupAlbum key={idx} album={album} />
                  ))}
                </ul>
              </section>
            ))}
          </section>
          {japanAlbums && (
            <section className="w-full flex flex-col items-center mb-[60px] px-[27px]">
              <h3 className="text-4xl font-extrabold mb-[40px]">
                JAPAN ALBUMS
              </h3>
              {Object.keys(japanAlbums).map((category, idx) => (
                <section
                  key={idx}
                  className="w-full flex flex-col items-center mb-[40px]"
                >
                  <div
                    className="max-w-fit text-[16px] font-semibold mb-[40px] pt-[3px] pr-[5px] pb-[2px] pl-[4px] rounded-[5px]"
                    style={{
                      backgroundColor: albumconbgColor,
                      color: albumcontextColor,
                    }}
                  >
                    <p>{category}</p>
                  </div>
                  <ul
                    className={`w-full ${
                      japanAlbums[category]?.length === 1
                        ? "grid grid-cols-1 justify-center"
                        : "grid grid-cols-2 gap-x-[24px] gap-y-[58px]"
                    }`}
                  >
                    {japanAlbums[category]?.map((album, idx) => (
                      <IdolgroupAlbum key={idx} album={album} />
                    ))}
                  </ul>
                </section>
              ))}
            </section>
          )}
        </main>
      </RouteTransition>
    </div>
  );
};

export default Idolgroup;
