import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ViewStyle,
} from "react-native";
import { colors } from "./theme/colors";

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const SafeView = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
