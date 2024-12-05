import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context";
import "../styles/details.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
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
      {dentist && (
        <>
          <h1>Dentist Details {dentist.id} </h1>
          <div className="details-container">
            <p>Name: {dentist.name}</p>
            <p>Email: {dentist.email}</p>
            <p>Phone: {dentist.phone}</p>
            <p>Website: {dentist.website}</p>
          </div>
        </>
      )}
    </main>
  );
};

export default Detail;
