import React from "react";
import { View, StyleSheet, Image, Platform, Text } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../const/theme/colors";
import { WebView } from "react-native-webview";

interface Props {
  restaurant: any;
  isMap: any;
}

export default ({ restaurant, isMap }: Props) => {
  const isAndroid = Platform.OS === "android";
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isAndroid && isMap ? (
          <WebView
            style={styles.image}
            source={{ uri: restaurant.photos[0] }}
          />
        ) : (
          <Image style={styles.image} source={{ uri: restaurant.photos[0] }} />
        )}
      </View>

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
    width: 120,
    aspectRatio: 1,
  },
  imageContainer: {
    padding: 5,
  },
  text: {
    fontSize: 15,
    padding: 10,
    textAlign: "center",
  },
});
