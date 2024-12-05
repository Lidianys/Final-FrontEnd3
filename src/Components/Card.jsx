import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";
import '../styles/card.css';
import DoctorImg from '../images/doctor.jpg';
import AddedFavIcon from '../images/favoritesilver_star_favorite_6338.png';
import FavIcon from '../images/star_favorite_5754.png';

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
        <img src={DoctorImg} alt="Doctor" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      {!isFavorite ? (
        <button onClick={handleAddFav}>
          <img src={FavIcon} alt="AddedToFavs" />
        </button>
      ) : (
        <button onClick={handleRemoveFav}>
          <img src={AddedFavIcon} alt="RemovedFromFavs" />
        </button>
      )}
    </div>
  );
};

export default Card;
