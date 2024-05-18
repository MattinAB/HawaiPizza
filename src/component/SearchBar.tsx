import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../const/theme/colors";
import { LocationContext } from "../services/location/locationContext";

interface SearchbarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder, ...otherProps }: SearchbarProps) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        placeholder={placeholder}
        {...otherProps}
        onSubmitEditing={() => search(searchKeyword)}
      />
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
