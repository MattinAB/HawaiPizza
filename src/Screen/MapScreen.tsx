import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { SearchBar } from "../component/SearchBar";
import { LocationContext } from "../services/location/locationContext";

export default () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <>
      <View style={styles.searchBar}>
        <SearchBar
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
          onSubmitEditing={() => search(searchKeyword)}
          placeholder="Search for location "
        />
      </View>
      <MapView style={{ height: "100%" }} />
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    width: "100%",
    position: "absolute",
    zIndex: 999,
    top: 50,
  },
});
