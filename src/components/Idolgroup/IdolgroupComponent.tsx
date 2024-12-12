import React, { ReactNode } from "react";

import { IidolGroup, IAlbums } from "../../types/idol";
import IdolgroupAlbum from "./IdolgroupAlbum";

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
      className={`text-4xl font-extrabold mb-[24px] lg:mb-[200px] ${className}`}
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
    if (length === 2) return "grid grid-cols-2 gap-x-[64px] gap-y-[58px]";
    return "grid grid-cols-2 sm:grid-cols-3 gap-x-[64px] gap-y-[58px]";
  };

  return (
    <ul className={`w-full ${getGridClass()} ${className}`}>{children}</ul>
  );
};

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
        className="w-full flex flex-col items-center mb-[40px]"
      >
        <div
          className="max-w-fit text-[16px] font-semibold mb-[40px] pt-[3px] pr-[5px] pb-[2px] pl-[4px] rounded-[5px]"
          style={{
            backgroundColor: albumConBgColor,
            color: albumContextColor,
          }}
        >
          <p>{category}</p>
        </div>
        <IdolgroupComponent.Ul length={albums[category]?.length}>
          {albums[category]?.map((album, idx) => (
            <IdolgroupAlbum key={idx} album={album} />
          ))}
        </IdolgroupComponent.Ul>
      </section>
    ))}
  </IdolgroupComponent.Section>
);

export default IdolgroupComponent;
