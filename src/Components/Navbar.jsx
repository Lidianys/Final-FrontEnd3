import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

   const toggleTheme = () => {
     const newTheme = state.theme === "light" ? "dark" : "light";
     dispatch({ type: "SET_THEME", payload: newTheme }); // Disparamos la acción SET_THEME
   };

  return (
    <nav className={state.theme}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
}

export default Navbar