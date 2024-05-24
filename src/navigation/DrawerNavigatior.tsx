import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import LoginScreen from "../Screen/LoginScreen";
import SettingScreen from "../Screen/SettingScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { isAuthenticate } = useContext(AuthContext);
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Setting" component={SettingScreen} />
      {isAuthenticate ? (
        <Drawer.Screen name="Login" component={LoginScreen} />
      ) : null}
    </Drawer.Navigator>
  );
};
