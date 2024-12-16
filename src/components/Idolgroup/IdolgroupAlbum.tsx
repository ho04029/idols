import { IAlbum } from "../../types/idol";

const IdolgroupAlbum = ({ album }: { album: IAlbum }) => {
  const { img, date, series, title, etc } = album;

  return (
    <li className="flex flex-col items-center">
      <img
        src={img}
        alt={title}
        className="w-[148px] lg:w-[280px] h-[148px] lg:h-[280px] mb-[10px]"
      />
      {date.split(",").map((d, idx) => (
        <p key={idx} className="text-[14px] font-medium">
          {d.trim()}
        </p>
      ))}
      <p className="text-[14px] font-medium mb-[10px]">{series}</p>
      <p className="text-[16px] font-bold text-center">[{title}]</p>
      {etc && <p className="text-[12px] font-medium">{etc}</p>}
    </li>
  );
};

export default IdolgroupAlbum;
