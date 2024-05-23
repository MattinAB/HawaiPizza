import React, { Children } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/LoginScreen";
import RegisterationScreen from "../Screen/RegisterationScreen";
import SettingScreen from "../Screen/SettingScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterationScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
