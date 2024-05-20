import React, { useContext } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import { RestaurantCard } from "../RestaurantCard";
import MapCallout from "../MapCallout";

export const Favouritebar = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {favourites.map((restaurant: any) => {
        return (
          <View key={favourites.id}>
            <MapCallout restaurant={restaurant} />
          </View>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
