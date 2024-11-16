import { IidolGroup } from "../types/idol";
import Header from "../components/Header";
import IdolgroupMember from "../components/IdolgroupMember";
import IdolgroupAlbum from "../components/IdolgroupAlbum";

const Idolgroup = ({ group }: { group: IidolGroup }) => {
  const {
    name,
    logo,
    mainPhoto,
    slogan,
    members,
    albums,
    japanAlbums,
    bgColor,
    textColor,
    memberConColor,
    memberConTextColor,
    headerActiveColor,
    headerActiveTextColor,
    albumconbgColor,
    albumcontextColor,
  } = group;

  return (
    <div className="flex justify-center">
      <div
        className="font-['Loboto'] w-[430px]"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Header
          textColor={textColor}
          headerActiveColor={headerActiveColor}
          headerActiveTextColor={headerActiveTextColor}
        />

        <div className="flex flex-col items-center">
          <section className="flex flex-col items-center mb-[54px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-[47px] mb-[18px]"
            />
            <img
              src={mainPhoto}
              alt={`${name} mainPhoto`}
              className="w-[349px] h-[231px] mb-2"
            />
            <p className="text-[10px] font-semibold">{slogan}</p>
          </section>
          <section className="w-full flex flex-col items-center mb-[60px]">
            <h3 className="text-4xl font-extrabold mb-[24px]">MEMBERS</h3>
            <ul className="w-full grid grid-cols-2">
              {members.map((member, idx) => (
                <IdolgroupMember
                  key={idx}
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
        </div>
      </div>
    </div>
  );
};

export default Idolgroup;
