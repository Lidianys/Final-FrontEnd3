import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { id } = useParams();
    const [dentist, setDentist] = useState(null);
    const { state } = useContext(GlobalContext);


    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setDentist(data))
        .catch((error) => console.error(error));
    }, [id]);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentist Details </h1>
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </main>
  );
}

export default Detail