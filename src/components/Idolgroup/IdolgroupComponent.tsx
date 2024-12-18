import React, { ReactNode } from "react";

import { IidolGroup, IAlbums, IidolMember } from "../../types/idol";
import IdolgroupAlbum from "./IdolgroupAlbum";
import IdolgroupMember from "./IdolgroupMember";

interface IProps {
  children: ReactNode;
  className?: string;
}

interface IIdolgroupProps extends IProps {
  group: IidolGroup;
}

const IdolgroupComponent = ({ group, children }: IIdolgroupProps) => {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: group.bgColor, color: group.textColor }}
    >
      {children}
    </div>
  );
};

type ISectionProps = IProps & React.ComponentPropsWithoutRef<"section">;

IdolgroupComponent.Section = ({
  children,
  className,
  ...props
}: ISectionProps) => {
  return (
    <section
      className={`w-full flex flex-col items-center mb-[60px] lg:mb-[200px] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

IdolgroupComponent.H3 = ({ children, className }: IProps) => {
  return (
    <h3
      className={`text-4xl lg:text-5xl font-extrabold mb-[60px] lg:mb-[200px] ${className}`}
    >
      {children}
    </h3>
  );
};

interface IUlProps extends IProps {
  length?: number;
}

IdolgroupComponent.Ul = ({ children, className, length = 1 }: IUlProps) => {
  const getGridClass = () => {
    if (length === 1) return "grid grid-cols-1 justify-center";
    if (length === 2) return "grid grid-cols-2 gap-y-[58px]";
    return "grid grid-cols-2 sm:grid-cols-3 gap-y-[58px] lg:gap-y-[150px]";
  };

  return <ul className={`${getGridClass()} ${className}`}>{children}</ul>;
};

interface IIdolgroupMembersProps {
  members: IidolMember[];
  memberConColor: string;
  memberConTextColor: string;
}

IdolgroupComponent.Members = ({
  members,
  memberConColor,
  memberConTextColor,
}: IIdolgroupMembersProps) => (
  <IdolgroupComponent.Section id="members">
    <IdolgroupComponent.H3>MEMBERS</IdolgroupComponent.H3>
    <IdolgroupComponent.Ul
      length={members.length}
      className="max-w-[280px] sm:max-w-[452px] lg:max-w-[1040px] gap-x-[64px] lg:gap-x-[100px]"
    >
      {members.map((member, idx) => (
        <IdolgroupMember
          key={idx}
          member={member}
          memberConColor={memberConColor}
          memberConTextColor={memberConTextColor}
        />
      ))}
    </IdolgroupComponent.Ul>
  </IdolgroupComponent.Section>
);

interface IdolgroupAlbumsProps {
  albums: IAlbums;
  albumConBgColor: string;
  albumContextColor: string;
  sectionTitle?: string;
  id?: string;
}

IdolgroupComponent.Albums = ({
  albums,
  albumConBgColor,
  albumContextColor,
  sectionTitle = "Albums",
  id,
}: IdolgroupAlbumsProps) => (
  <IdolgroupComponent.Section id={id}>
    <IdolgroupComponent.H3>{sectionTitle}</IdolgroupComponent.H3>
    {Object.keys(albums).map((category, idx) => (
      <section
        key={idx}
        className="w-full flex flex-col items-center mb-[40px] lg:mb-[208px]"
      >
        <div
          className="max-w-fit text-[16px] lg:text-[41px] font-semibold mb-[40px] lg:mb-[208px] pt-[3px] pr-[5px] pb-[2px] pl-[4px] lg:px-[25px] lg:py-[8px] rounded-[5px] lg:rounded-[30px]"
          style={{
            backgroundColor: albumConBgColor,
            color: albumContextColor,
          }}
        >
          <p>{category}</p>
        </div>
        <IdolgroupComponent.Ul
          length={albums[category]?.length}
          className="max-w-[324px] sm:max-w-[500px] lg:max-w-[1020px] gap-x-[28px] lg:gap-x-[90px]"
        >
          {albums[category]?.map((album, idx) => (
            <IdolgroupAlbum key={idx} album={album} />
          ))}
        </IdolgroupComponent.Ul>
      </section>
    ))}
  </IdolgroupComponent.Section>
);

export default IdolgroupComponent;
