import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";

const Card = ({ id, name, username, location, addFavorite }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const isFavorite = state.favs.some((fav) => fav.id === id);

  const handleAddFav = () => {
    if (!isFavorite) {
      dispatch({
        type: "ADD_FAV",
        payload: { id, name, username, location, addFavorite },
      });
    }
  };

  const handleRemoveFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: { id: id } });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      {!isFavorite ? (
        <button onClick={handleAddFav}>Add to Favorites</button>
      ) : (
        <button onClick={handleRemoveFav}>Remove from Favorites</button>
      )}
    </div>
  );
};

export default Card;
