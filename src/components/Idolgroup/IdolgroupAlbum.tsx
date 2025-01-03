import { IAlbum } from "../../types/idol";

const IdolgroupAlbum = ({ album }: { album: IAlbum }) => {
  const { img, date, series, title, etc, youtubeLink } = album;

  return (
    <li>
      <a
        target="blank"
        href={youtubeLink}
        className="flex flex-col items-center"
      >
        <img
          src={img}
          alt={title}
          className="w-[148px] lg:w-[280px] h-[148px] lg:h-[280px] mb-[10px] lg:mb-[25px]"
        />
        <p className="mb-[10px] lg:mb-[15px] text-center text-[14px] lg:text-[25px] font-medium lg:font-semibold lg:leading-[30px]">
          {date.split(",").map((d, idx) => (
            <span key={idx}>
              {d.trim()} <br />
            </span>
          ))}

          {series}
        </p>
        <p className="text-[16px] lg:text-[30px] font-bold text-center leading-[18px] lg:leading-[30px]">
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
