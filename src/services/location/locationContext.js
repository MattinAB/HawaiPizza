import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if ((!keyword).length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ keyword, isLoading, error, location, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
