import { IAlbum } from "../../types/idol";

const IdolgroupAlbum = ({ album }: { album: IAlbum }) => {
  const { img, date, series, title, etc, youtubeLink } = album;

  return (
    <li>
      <a
        target="blank"
        href={youtubeLink}
        className="flex flex-col items-center gap-[10px] lg:gap-[30px]"
      >
        <img
          src={img}
          alt={title}
          className="w-[148px] lg:w-[280px] h-[148px] lg:h-[280px]"
        />
        <p className="text-center text-[14px] lg:text-[30px] font-medium lg:font-semibold">
          {date.split(",").map((d, idx) => (
            <span key={idx}>
              {d.trim()} <br />
            </span>
          ))}

          {series}
        </p>
        <p className="text-[16px] lg:text-[35px] font-bold text-center leading-[18px] lg:leading-[35px]">
          [{title}]
          {etc && (
            <>
              <br />
              <span className="text-[12px] lg:text-[25px] font-medium">
                {etc}
              </span>
            </>
          )}
        </p>
      </a>
    </li>
  );
};

export default IdolgroupAlbum;
