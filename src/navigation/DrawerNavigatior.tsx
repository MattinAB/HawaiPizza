import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import { AccountNavigator } from "./AccountNavigator";
import Home from "../Screen/Home";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      {!isAuthenticated ? (
        <Drawer.Screen name="Login" component={AccountNavigator} />
      ) : null}
    </Drawer.Navigator>
  );
};
