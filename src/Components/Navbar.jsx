import { useContext } from "react";
import { Link } from "react-router-dom";
import darkIcon from "../images/darkMode.png";
import logoIcon from "../images/DH.ico";
import lightIcon from "../images/lightMode.png";
import "../styles/navbar.css";
import { GlobalContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={state.theme}>
      <div className="logo">
        <img src={logoIcon} alt="Logo" />
        <span>Odonto</span>
      </div>
      <div className="menu-icons">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contacto">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          <img
            src={state.theme === "light" ? darkIcon : lightIcon}
            alt="Toggle Theme"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
