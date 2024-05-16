import React, { useState, useEffect, useMemo, createContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurantService";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurant = () => {
    setTimeout(() => {
      setIsLoading(true);
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    retrieveRestaurant();
  }, []);
  console.log(restaurants);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
