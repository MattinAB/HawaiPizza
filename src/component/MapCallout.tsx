import React from "react";
import { View, StyleSheet, Image, Platform, Text } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../const/theme/colors";
import { WebView } from "react-native-webview";

interface Props {
  restaurant: any;
}

export default ({ restaurant }: Props) => {
  return (
    <View style={styles.container}>
      {Platform.OS === "android" ? (
        <WebView style={styles.image} source={{ uri: restaurant.photos[0] }} />
      ) : (
        <Image style={styles.image} source={{ uri: restaurant.photos[0] }} />
      )}

      <Text style={styles.text}>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    aspectRatio: 1,
  },
  text: {
    fontSize: 15,
    padding: 10,
    textAlign: "justify",
  },
});
