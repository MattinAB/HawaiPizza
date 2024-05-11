import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  children?: React.ReactNode;
  style: ViewStyle;
}

export const Screen = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
