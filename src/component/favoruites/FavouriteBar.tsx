import React, { useContext } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import { RestaurantCard } from "../RestaurantCard";
import MapCallout from "../MapCallout";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface Props {
  onNavigate: any;
}

export const Favouritebar = ({ onNavigate }: Props) => {
  const { favourites } = useContext(FavouritesContext);
  // pass onNavigate to <RestaurantInfo/> to take navigation.navigate as argument
  if (!favourites.length) {
    return null;
  }
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {favourites.map((restaurant: any) => {
        return (
          <View key={`@favourite ${restaurant.name}`}>
            <TouchableWithoutFeedback
              // put the body of navigation.navigate and use {restaurant} and render it from RestaurantInfo
              onPress={() => onNavigate("RestaurantDetails", { restaurant })}
            >
              <MapCallout restaurant={restaurant} />
            </TouchableWithoutFeedback>
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
