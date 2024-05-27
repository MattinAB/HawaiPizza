import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../authentication/AuthenticationContext";
export const FavouritesContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthContext);

  const saveFavourite = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourite-${uid}`, jsonValue);
    } catch (e) {
      console.log("error to save data", e);
    }
  };

  const loadFavourite = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourite-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error to load data", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourite();
    }
  }, [user.uid]);
  // Its importing to prefix the useEffect of loading the storage  before the saving Effect
  // otherwise its will not work >>>>

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourite(favourites);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
