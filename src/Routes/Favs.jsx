import { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(GlobalContext);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
