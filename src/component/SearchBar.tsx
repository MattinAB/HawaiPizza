import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../const/colors";

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
    backgroundColor: colors.light,
    width: "100%",
    borderRadius: 20,
    padding: 10,
  },
});
