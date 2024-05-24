import React, { useContext } from "react";
import { AppNavigator } from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
