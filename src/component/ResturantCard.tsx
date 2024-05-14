import React from "react";
import { View, StyleSheet, Image, Text, ViewStyle } from "react-native";
import { colors } from "../const/theme/colors";
import { AppText } from "./AppText";
import { theme } from "../const/theme";
import { SvgXml } from "react-native-svg";
import start from "../../assets/star";

interface ResturantCardProps {
  resturant: {
    name: string;
    icon?: string;
    photos: string[];
    address: string;
    isOpenNow?: boolean;
    rating: number;
    isCloseTemporary?: boolean;
  };
}

export const ResturantCard = ({ resturant }: ResturantCardProps) => {
  const { name, icon, photos, address, isOpenNow, rating, isCloseTemporary } =
    resturant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photos[0] }} />
      </View>
      <View style={styles.details}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.address}>Adress: {address}</AppText>
        <View style={styles.rating}>
          {ratingArray.map(() => (
            <SvgXml height={20} width={20} xml={start} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    margin: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 5,
  },
  imageContainer: {
    padding: 10,
  },

  address: {
    fontSize: theme.fontSizes.caption,
    fontFamily: theme.fonts.monospace,
    fontStyle: "italic",
    color: colors.medium,
  },
  rating: {
    flexDirection: "row",
  },
  details: {
    padding: 5,
    marginLeft: 15,
  },
  name: {
    fontFamily: theme.fonts.body,
  },
});
