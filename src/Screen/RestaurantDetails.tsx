import React from "react";
import { StyleSheet } from "react-native";
import { SafeView } from "../const/SafeView";
import { AppText } from "../component/AppText";
import { RestaurantCard } from "../component/RestaurantCard";

interface Props {
  route: any;
}

export const RestaurantDetails = ({ route }: Props) => {
  const { restaurant } = route.params;
  return (
    <SafeView>
      <RestaurantCard resturants={restaurant} />
    </SafeView>
  );
};
