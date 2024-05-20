import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../const/theme/colors";
import { AppText } from "./AppText";
import { theme } from "../const/theme";
import { SvgXml } from "react-native-svg";
import start from "../../assets/star";
import open from "../../assets/open";
import { Favourite } from "./favoruites/Favourite";
interface ResturantCardProps {
  onPress?: () => void;
  resturants: {
    name: string;
    icon?: string;
    photos: string[];
    address: string;
    isOpenNow?: boolean;
    rating: number;
    isCloseTemporary?: boolean;
  };
}

export const RestaurantCard = ({ resturants, onPress }: ResturantCardProps) => {
  const { name, icon, photos, address, isOpenNow, rating, isCloseTemporary } =
    resturants;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.favourite}>
        <Favourite restaurants={resturants} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photos[0] }} />
      </View>
      <View style={styles.details}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.address}>Adress: {address}</AppText>
        <View style={styles.section}>
          <View style={styles.rating}>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star${index}`} height={25} width={25} xml={start} />
            ))}
          </View>

          <View style={styles.isOpenNow}>
            <View style={{ marginRight: 10, alignItems: "center" }}>
              {isCloseTemporary && (
                <AppText style={styles.closeTemporary}>Close Temporary</AppText>
              )}
            </View>
            {isOpenNow && <SvgXml height={25} width={25} xml={open} />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  address: {
    fontSize: theme.fontSizes.caption,
    fontFamily: theme.fonts.monospace,
    fontStyle: "italic",
    color: colors.medium,
  },
  rating: {
    flexDirection: "row",
  },
  closeTemporary: {
    fontFamily: theme.fonts.body,
    color: colors.danger,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    // margin: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 5,
  },
  isOpenNow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  imageContainer: {
    padding: 10,
  },
  section: {
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  details: {
    padding: 5,
    marginLeft: 15,
  },
  name: {
    fontFamily: theme.fonts.body,
  },
  favourite: {
    position: "absolute",
    right: 25,
    top: 25,
    zIndex: 1,
  },
});
