import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppText } from "./AppText";
import { AuthContext } from "../services/authentication/AuthenticationContext";

export default () => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <View style={styles.container}>
      <AppText icon={"account"}>{userInfo.name}.</AppText>
      <AppText icon={"email"}> {userInfo.email}.</AppText>
      <AppText icon={"cellphone"}> {userInfo.phoneNumber}.</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },
});
