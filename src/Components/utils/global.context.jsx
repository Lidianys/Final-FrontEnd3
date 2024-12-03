import { createContext, useReducer } from "react";
export const GlobalContext = createContext();

export const initialState = {
  theme: "light",
  dentists: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      if (state.favs.some((fav) => fav.id === action.payload.id)) {
        return state;
      }
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
