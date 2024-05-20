import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RestaurantSearchBar } from "../component/Restaurant.SearchBar";
import { SafeView } from "../const/SafeView";
import { StatusBar } from "expo-status-bar";
import { RestaurantCard } from "../component/RestaurantCard";
import { RestaurantContext } from "../services/restaurant/restaurantContext";
import ActivitiIndicator from "../component/ActivitiIndicator";
import { Favouritebar } from "../component/favoruites/FavouriteBar";

interface Props {
  navigation: any;
}

export default ({ navigation }: Props) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const [isFavouriteToggled, setIsFavouriteToggled] = useState(false);

  return (
    <>
      <SafeView>
        <View style={styles.searchBar}>
          <RestaurantSearchBar
            isFavouriteToggled={isFavouriteToggled}
            onFavouriteToggled={() =>
              setIsFavouriteToggled(!isFavouriteToggled)
            }
            placeholder="Search"
          />
          {isFavouriteToggled && <Favouritebar />}
        </View>
        {isLoading && <ActivitiIndicator />}
        <FlatList
          data={restaurants}
          /*keyExtractor take uniqe key and render the item certen theis key its  can  take item.name  */
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <RestaurantCard
              resturants={item}
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            />
          )}
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
