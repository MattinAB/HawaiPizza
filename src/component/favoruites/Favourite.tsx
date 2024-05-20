import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  restaurants: any;
}

export const Favourite = ({ restaurants }: Props) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (f: any) => f.placeId === restaurants.placeId
  );
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurants)
          : removeFromFavourites(restaurants);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        color={isFavourite ? "red" : "white"}
        size={24}
      />
    </TouchableWithoutFeedback>
  );
};
