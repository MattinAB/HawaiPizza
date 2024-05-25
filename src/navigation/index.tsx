import React from "react";
import { AppNavigator } from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";

export const Navigation = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
