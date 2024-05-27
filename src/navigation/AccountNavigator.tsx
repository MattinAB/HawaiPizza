import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/LoginScreen";
import RegisterationScreen from "../Screen/RegisterationScreen";
import { AuthContext } from "../services/authentication/AuthenticationContext";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {!isAuthenticated ? (
        <Stack.Screen name="Register" component={RegisterationScreen} />
      ) : null}
    </Stack.Navigator>
  );
};
