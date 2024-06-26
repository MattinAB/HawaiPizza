import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetails } from "../Screen/RestaurantDetails";
import ResturantInfo from "../Screen/RestaurantInfo";

const Stack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Restaurants" component={ResturantInfo} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};
