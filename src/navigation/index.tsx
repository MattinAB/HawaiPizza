import React from "react";
import { AppNavigator } from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import { AuthProvider } from "../services/authentication/AuthenticationContext";

export const Navigation = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
