import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../const/colors";
import { AppText } from "./AppText";

interface ResturantCardProps {
  resturant: {
    name: string;
    icon?: string;
    photos: string[];
    address?: string;
    isOpenNow?: boolean;
    rating: number;
    isCloseTemporary?: boolean;
  };
}

export const ResturantCard = ({ resturant }: ResturantCardProps) => {
  const { name, icon, photos, address, isOpenNow, rating, isCloseTemporary } =
    resturant;
  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: photos[0] }}
        />
      </View>
      <View style={styles.details}>
        <AppText>{name}</AppText>
        <AppText style={styles.address}>Adress: {address}</AppText>
        <AppText style={styles.rating}>Rating: {rating}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },

  address: {
    fontSize: 16,
    fontStyle: "italic",
    color: colors.medium,
  },
  rating: {
    fontSize: 16,
    fontStyle: "italic",
  },
  details: {
    padding: 5,
    marginLeft: 15,
  },
});
