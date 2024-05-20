import React, { useState, useContext, useEffect } from "react";
import { ViewStyle } from "react-native";
import { LocationContext } from "../services/location/locationContext";
import { SearchBar } from "./SearchBar";

interface SearchbarProps {
  placeholder: string;
  style?: ViewStyle;
  isFavouriteToggled: boolean;
  onFavouriteToggled: () => void;
}

export const RestaurantSearchBar = ({
  placeholder,
  onFavouriteToggled,
  isFavouriteToggled,

  ...otherProps
}: SearchbarProps) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBar
      onIconPress={onFavouriteToggled}
      icon={isFavouriteToggled ? "heart" : "hearto"}
      value={searchKeyword}
      onChangeText={(text) => setSearchKeyword(text)}
      onSubmitEditing={() => search(searchKeyword)}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
