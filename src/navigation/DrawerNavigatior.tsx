import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";
import Home from "../Screen/Home";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      {!isAuthenticated ? (
        <Drawer.Screen name="Login" component={AccountNavigator} />
      ) : null}
    </Drawer.Navigator>
  );
};
