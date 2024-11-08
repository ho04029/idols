import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="text-white">
        {"<"}
      </Link>
      <nav>
        <NavLink
          to={"/idolgroup/THEBOYZ"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-500"
          }
        >
          THEBOYZ
        </NavLink>
        <NavLink
          to={"/idolgroup/ZEROBASEONE"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-500"
          }
        >
          ZEROBASEONE
        </NavLink>
        <NavLink
          to={"/idolgroup/RIIZE"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-500"
          }
        >
          RIIZE
        </NavLink>
        <NavLink
          to={"/idolgroup/NCTWISH"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-500"
          }
        >
          NCTWISH
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
