import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

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
    width: "100%",
    height: 50,
    borderRadius: 15,
    padding: 10,
  },
});
