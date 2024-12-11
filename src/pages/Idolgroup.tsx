import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useIdolGroupPageIndexStore } from "../store/store";
import { IdolGroups, groupList } from "../data/idolgroup";
import { transitionDirectionCalculator } from "../utils/transitionDirectionCalculator";
import RouteTransition from "../components/RouteTransition";
import IdolgroupMember from "../components/Idolgroup/IdolgroupMember";
import IdolgroupComponent from "../components/Idolgroup/IdolgroupComponent";
import IdolgroupHeader from "../components/Idolgroup/IdolgroupHeader";

const Idolgroup = () => {
  const location = useLocation();

  const groupName = location.pathname.split("/")[2];
  const group = IdolGroups[groupName];

  const { activeIndex, prevIndex, setActiveIndex } =
    useIdolGroupPageIndexStore();
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
      <IdolgroupHeader group={group} location={location} />
      <RouteTransition location={location} direction={direction}>
        <main>
          <IdolgroupComponent.Section
            id="home"
            className="px-[26px] lg:px-[118px]"
          >
            <img
              src={group.logo}
              alt={`${group.name} logo`}
              className="h-[47px] lg:h-[157px] mb-[18px] lg:mb-[60px]"
            />
            <img
              src={group.mainPhoto}
              alt={`${group.name} mainPhoto`}
              className="w-full mb-2 lg:mb-[30px]"
            />
            <p className="text-center text-[14px] lg:text-[30px] font-bold break-keep">
              {group.slogan}
            </p>
          </IdolgroupComponent.Section>

          <IdolgroupComponent.Section id="members" className="px-[66px]">
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
            id="albums"
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
