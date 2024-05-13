import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../const/theme/colors";
import {
  lightGreen100,
  yellow500,
} from "react-native-paper/lib/typescript/styles/themes/v2/colors";

interface SearchbarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder, ...otherProps }: SearchbarProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
