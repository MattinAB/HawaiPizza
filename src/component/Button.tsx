import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle, Text } from "react-native";
import { colors } from "../const/theme/colors";
import Styles from "../const/theme/styles";

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default ({ title, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={Styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.danger,
    //padding: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
});
