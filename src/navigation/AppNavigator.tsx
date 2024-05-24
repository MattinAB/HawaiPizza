import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingScreen from "../Screen/SettingScreen";
import MapScreen from "../Screen/MapScreen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantNavigator } from "./RestaurantNavigator";
import { DrawerNavigator } from "./DrawerNavigatior";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="restaurant" size={size} color={color} />
        ),
      }}
      name="Resturant"
      component={RestaurantNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="map" size={size} color={color} />
        ),
      }}
      name="Map"
      component={MapScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }}
      name="Setting"
      component={DrawerNavigator}
    />
  </Tab.Navigator>
);
