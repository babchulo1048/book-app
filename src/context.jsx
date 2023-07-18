import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

const URL = "https://openlibrary.org/search.json?title=";

const AppContext = React.createContext();

const getFavoritesLocalStorage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites;
};

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(getFavoritesLocalStorage());

  const AddFavorites = (book) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorites = (id) => {
    const updatedFavorites = favorites.filter((book) => book.key !== id);
    // console.log("updatedFavorites" + updatedFavorites);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const fetchBooks = async (title) => {
    setLoading(true);
    try {
      const { data } = await axios(`${URL}${title}`);
      console.log(data.docs);
      const { docs } = data;
      if (docs) {
        setBooks(docs);
      } else {
        setBooks([]);
      }
    } catch (e) {
      console.log(e.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks(searchTerm ? searchTerm : "life");
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        books,
        loading,
        setSearchTerm,
        AddFavorites,
        removeFavorites,
        favorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
