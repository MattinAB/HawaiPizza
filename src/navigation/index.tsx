import React, { useContext } from "react";
import { AppNavigator } from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import { AuthProvider } from "../services/authentication/AuthenticationContext";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation = () => {
  const isAuthenticated = useContext(AuthContext);
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthProvider>
        {!isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
      </AuthProvider>
    </NavigationContainer>
  );
};
