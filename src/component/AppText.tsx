import React from "react";
import { Text, StyleSheet, ViewStyle } from "react-native";
import styles from "../const/styles";

interface Props {
  children: React.ReactNode;
  style?: any;
}
export const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[styles.Text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
