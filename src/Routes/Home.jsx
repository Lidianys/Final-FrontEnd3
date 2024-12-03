import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        dispatch({ type: "SET_DENTISTS", payload: data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };
    fetchDentists();
  }, [dispatch]);

  return (
    <main className={state.theme === "dark" ? "dark" : ""}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.length > 0 ? (
          state.dentists.map((dentist) => (
            <Card key={dentist.id} {...dentist} />
          ))
        ) : (
          <p>Cargando dentistas...</p>
        )}
      </div>
    </main>
  );
};

export default Home;
