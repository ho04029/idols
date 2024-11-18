import { NavLink } from "react-router-dom";

const Header = ({
  textColor,
  headerActiveColor,
  headerActiveTextColor,
}: {
  textColor: string;
  headerActiveColor: string;
  headerActiveTextColor: string;
}) => {
  return (
    <header className="flex mt-[37px] mb-[38px] text-[14px] font-bold">
      <nav className="w-full flex justify-between gap-[18px]">
        <NavLink
          to={"/idolgroup/THEBOYZ"}
          style={({ isActive }) => ({
            color: isActive ? headerActiveTextColor : textColor,
            backgroundColor: isActive ? headerActiveColor : "transparent",
            borderRadius: isActive ? "5px" : "none",
            padding: isActive ? "4px 5px 5px" : "none",
          })}
        >
          THEBOYZ
        </NavLink>
        <NavLink
          to={"/idolgroup/ZEROBASEONE"}
          style={({ isActive }) => ({
            color: isActive ? headerActiveTextColor : textColor,
            backgroundColor: isActive ? headerActiveColor : "transparent",
            borderRadius: isActive ? "5px" : "none",
            padding: isActive ? "4px 5px 5px" : "none",
          })}
        >
          ZEROBASEONE
        </NavLink>
        <NavLink
          to={"/idolgroup/RIIZE"}
          style={({ isActive }) => ({
            color: isActive ? headerActiveTextColor : textColor,
            backgroundColor: isActive ? headerActiveColor : "transparent",
            borderRadius: isActive ? "5px" : "none",
            padding: isActive ? "4px 5px 5px" : "none",
          })}
        >
          RIIZE
        </NavLink>
        <NavLink
          to={"/idolgroup/NCTWISH"}
          className=""
          style={({ isActive }) => ({
            color: isActive ? headerActiveTextColor : textColor,
            backgroundColor: isActive ? headerActiveColor : "transparent",
            borderRadius: isActive ? "5px" : "none",
            padding: isActive ? "4px 5px 5px" : "none",
          })}
        >
          NCTWISH
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
