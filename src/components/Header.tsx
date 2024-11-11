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
    <header className="flex mt-[37px] mb-[38px] mx-[30px] text-[12px] font-bold">
      <nav>
        <NavLink
          to={"/idolgroup/THEBOYZ"}
          className="mr-[28px]"
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
          className="mr-[28px]"
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
          className="mr-[28px]"
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
