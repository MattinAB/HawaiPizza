import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchBar } from "../component/SearchBar";
import { SafeView } from "../const/SafeView";
import { StatusBar } from "expo-status-bar";
import { ResturantCard } from "../component/ResturantCard";
import { RestaurantContext } from "../services/restaurant/restaurantContext";
import ActivitiIndicator from "../component/ActivitiIndicator";

export default () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <>
      <SafeView>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Search" />
        </View>
        {isLoading && <ActivitiIndicator />}

        <FlatList
          data={restaurants}
          /*keyExtractor take uniqe key and render the item certen theis key its  can  take item.name  */
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ResturantCard resturants={item} />}
          contentContainerStyle={{ padding: 10, gap: 10 }}
        />
      </SafeView>

      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    // flex: 0.2,
  },
});
