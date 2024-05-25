import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import styles from "../const/theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../const/theme/colors";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | any;
  icon?: any;
}
export const AppText = ({ children, style, icon, ...otherProps }: Props) => {
  return (
    <View style={Styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={colors.medium}
        {...otherProps}
      />
      <Text style={[styles.Text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
