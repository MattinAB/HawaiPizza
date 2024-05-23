import React from "react";
import { Text, StyleSheet, ViewStyle } from "react-native";
import styles from "../const/theme/styles";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | any;
}
export const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[styles.Text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
