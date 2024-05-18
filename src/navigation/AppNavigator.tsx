import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import ResturantInfo from "../Screen/ResturantInfo";
import SettingScreen from "../Screen/SettingScreen";
import MapScreen from "../Screen/MapScreen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <NavigationContainer theme={NavigationTheme}>
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
        name="Resturant"
        component={ResturantInfo}
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
        component={SettingScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
