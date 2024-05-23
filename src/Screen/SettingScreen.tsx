import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { SafeView } from "../const/SafeView";
import { AppText } from "../component/AppText";

export default () => {
  return (
    <SafeView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/HawaiPizzaLogo.jpg")}
      />
    </SafeView>
  );
};
const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    opacity: 0.1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
